import {
  auth,
  createUser,
  deleteUserAccount,
  emailPasswordSignIn,
  userSignOut,
} from '../../firebase/auth-firebase';

// Tests to create a user
const createUserValidEmail = 'create@user.com';
const createUserValidPassword = '1234567890,';
const invalidEmail = 'createUsertest.com';
const passwordInvalidLength = '123abc-';
const passwordInvalidNum = 'abcdefghi-';
const passwordInvalidChar = '123456789a';

// Mock Callbacks
const successCallback = jest.fn(() => {});
const errorCallback = jest.fn(() => {});

describe('User Sign Up', () => {
  afterAll(async () => {
    await deleteUserAccount();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('fails to create a user: invalid email', async () => {
    await createUser(
      invalidEmail,
      createUserValidPassword,
      successCallback,
      errorCallback,
    );
    expect(successCallback).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalled();
    expect(auth.currentUser).toBe(null);
  });

  it('fails to create a user: password wrong length', async () => {
    await createUser(
      createUserValidEmail,
      passwordInvalidLength,
      successCallback,
      errorCallback,
    );
    expect(successCallback).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalled();
    expect(auth.currentUser).toBe(null);
  });

  it('fails to create a user: password missing number', async () => {
    await createUser(
      createUserValidEmail,
      passwordInvalidNum,
      successCallback,
      errorCallback,
    );
    expect(successCallback).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalled();
    expect(auth.currentUser).toBe(null);
  });

  it('fails to create a user: password missing special character', async () => {
    await createUser(
      createUserValidEmail,
      passwordInvalidChar,
      successCallback,
      errorCallback,
    );
    expect(successCallback).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalled();
    expect(auth.currentUser).toBe(null);
  });

  it('creates a user', async () => {
    await createUser(
      createUserValidEmail,
      createUserValidPassword,
      successCallback,
      errorCallback,
    );
    expect(successCallback).toHaveBeenCalled();
    expect(errorCallback).not.toHaveBeenCalled();
    expect(auth.currentUser).not.toBe(null);
  });
});

describe('User Sign In, Sign Out', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Sign\'s the user in', async () => {
    await emailPasswordSignIn(
      process.env.TEST_USER_EMAIL,
      process.env.TEST_USER_PASSWORD,
      successCallback,
      errorCallback,
    );
    expect(successCallback).toHaveBeenCalled();
    expect(errorCallback).not.toHaveBeenCalled();
    expect(auth.currentUser).not.toBe(null);
  });

  it('Sign\'s out the user', async () => {
    await userSignOut(successCallback, errorCallback);
    expect(successCallback).toHaveBeenCalled();
    expect(errorCallback).not.toHaveBeenCalled();
    expect(auth.currentUser).toBe(null);
  });
});
