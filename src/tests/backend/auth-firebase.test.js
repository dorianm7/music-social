import {
  auth,
  userSignUp,
  deleteUserAccount,
  emailPasswordSignIn,
  userSignOut,
} from '../../firebase/auth-firebase';

// Test objects
const email = {
  valid: 'valid@user.com',
  invalid: 'invalid',
};
const password = {
  valid: '1234567890-',
  invalidLength: '123abc-',
  invalidNum: 'abcdefghi-',
  invalidChar: '123456789a',
};

// Mock Callbacks
const successCallback = jest.fn(() => {});
const errorCallback = jest.fn(() => {});

describe('Signs up user', () => {
  afterAll(async () => {
    await deleteUserAccount();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('fails to sign up user: invalid email', async () => {
    try {
      await userSignUp(email.invalid, password.valid);
      successCallback();
    } catch (err) {
      errorCallback();
    }
    expect(successCallback).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalled();
    expect(auth.currentUser).toBe(null);
  });

  it('fails to sign up user: password wrong length', async () => {
    try {
      await userSignUp(email.valid, password.invalidLength);
      successCallback();
    } catch (err) {
      errorCallback();
    }
    expect(successCallback).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalled();
    expect(auth.currentUser).toBe(null);
  });

  it('fails to sign up user: password missing number', async () => {
    try {
      await userSignUp(email.valid, password.invalidNum);
      successCallback();
    } catch (err) {
      errorCallback();
    }
    expect(successCallback).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalled();
    expect(auth.currentUser).toBe(null);
  });

  it('fails to sign up user: password missing special character', async () => {
    try {
      await userSignUp(email.valid, password.invalidChar);
      successCallback();
    } catch (err) {
      errorCallback();
    }
    expect(successCallback).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalled();
    expect(auth.currentUser).toBe(null);
  });

  it('signs up user', async () => {
    try {
      await userSignUp(email.valid, password.valid);
      successCallback();
    } catch (err) {
      errorCallback();
    }
    expect(successCallback).toHaveBeenCalled();
    expect(errorCallback).not.toHaveBeenCalled();
    expect(auth.currentUser).not.toBe(null);
  });
});

describe('signs in user, signs out user', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('signs in user', async () => {
    try {
      await emailPasswordSignIn(
        process.env.REACT_APP_TEST_USER_EMAIL,
        process.env.REACT_APP_TEST_USER_PASSWORD,
      );
      successCallback();
    } catch (err) {
      errorCallback();
    }
    expect(successCallback).toHaveBeenCalled();
    expect(errorCallback).not.toHaveBeenCalled();
    expect(auth.currentUser).not.toBe(null);
  });

  it('signs out user', async () => {
    await userSignOut(successCallback, errorCallback);
    expect(successCallback).toHaveBeenCalled();
    expect(errorCallback).not.toHaveBeenCalled();
    expect(auth.currentUser).toBe(null);
  });
});
