import {
  // Functions
  // applyActionCode,       // Used for confirmPasswordReset, sendEmailVerification
  // checkActionCode,       // Used for confirmPasswordReset, sendEmailVerification?
  // confirmPasswordReset,  // Completes Password Reset.
  //                          Needs oobcode from sendPasswordResetEmail email
  createUserWithEmailAndPassword,
  deleteUser,            // Might need to authenticate again,
  //                          then call reauthenticateWithCredential first
  getAuth,
  // getRedirectResult,     // If using signInWithRedirect
  onAuthStateChanged,
  // reauthenticateWithCredential, // Can be called before deleteUser, updateEmail, updatePassword
  // reload,                // Used to reload user account data
  // sendEmailVerification, // Need to call applyActionCode to complete Email Verification
  // sendPasswordResetEmail,// Need to call confirmPasswordReset to complete Password Reset
  signInWithEmailAndPassword,
  signInWithPopup,          // Used to SignIn with GoogleAuthProvider
  signOut,
  // updateEmail,           // Might need to authenticate again,
  //                          then call reauthenticateWithCredential first
  // updatePassword,        // Might need to authenticate again
  //                          then call reauthenticateWithCredential first
  // verifyBeforeUpdateEmail, // Need to call applyActionCode to complete Email Verification Process
  // verifyPasswordResetCode, // Used in the Password Reset flow
  // Classes
  // AuthCredential,        // Used for reauthenticateWithCredential
  // EmailAuthCredential,   // Used for reauthenticateWithCredential
  GoogleAuthProvider,       // Used for signInWithPopUp
  // Variables
  browserPopupRedirectResolver, // Used for SignInWithPopup for GoogleSignIn
} from 'firebase/auth';
import app from './init-firebase';

import {
  VALID_EMAIL_REGEXP,
  HAS_NUM_REGEXP,
  HAS_SPECIAL_CHAR_REGEXP,
} from '../RegExps';

const auth = getAuth(app);

const VALID_PASSWORD_LENGTH = 10;

const emailValid = (email) => {
  const emailMatches = email.match(VALID_EMAIL_REGEXP);
  if (!emailMatches) {
    return false;
  }

  if (emailMatches.length === 1) {
    return emailMatches[0] === email;
  }
  return false;
};

// Returns the first invalid message for the password
const passwordValidityMessage = (password) => {
  const validLength = password.length >= VALID_PASSWORD_LENGTH;
  const includesNum = HAS_NUM_REGEXP.test(password);
  const includesSpecialChar = HAS_SPECIAL_CHAR_REGEXP.test(password);

  let message;

  if (!validLength) {
    message = `Password must be at least ${VALID_PASSWORD_LENGTH} characters`;
  } else if (!includesNum) {
    message = 'Password must include 1 number';
  } else if (!includesSpecialChar) {
    message = 'Password must include 1 special character';
  } else {
    message = 'valid';
  }

  return message;
};

const passwordValid = (password) => passwordValidityMessage(password) === 'valid';

/**
 * Sign up and return Firebase user
 * @param {string} email Email of the user
 * @param {string} password Password of the user
 * @returns {Promise<User>} Promise of a Firebase user
 * @see {@link https://firebase.google.com/docs/reference/js/auth.user.md?authuser=1#user_interface}
 */
const userSignUp = async (
  email,
  password,
) => {
  if (!emailValid(email)) {
    return Promise.reject(new Error('Invalid email format'));
  }
  if (!passwordValid(password)) {
    return Promise.reject(new Error(passwordValidityMessage(password)));
  }
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user);
};

/**
 * Deletes the Firebase user
 * @returns{Promise<void>} Promise the user was deleted
 */
const deleteUserAccount = () => deleteUser(auth.currentUser);

// successCallback should take a user argument
// errorCallback should take an error argument
const emailPasswordSignIn = async (
  email,
  password,
  successCallback = () => {},
  errorCallback = () => {},
) => {
  if (!emailValid(email)) {
    errorCallback(new Error('Invalid email format'));
  } else if (!passwordValid(password)) {
    errorCallback(new Error(passwordValidityMessage(password)));
  } else {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => userCredential.user)
      .then((user) => successCallback(user))
      .catch((err) => errorCallback(err));
  }
};

// onChangeCallback should take a user argument
// Returns unsubscribe
const handleAuthStateChange = (
  onChangeCallback,
  errorCallback = () => {},
  completedCallback = () => {},
) => {
  const unsub = onAuthStateChanged(
    auth,
    (user) => onChangeCallback(user),
    errorCallback,
    completedCallback,
  );
  return unsub;
};

// successCallback should take no arguments
// errorCallback should take an error argument
const userSignOut = async (
  successCallback = () => {},
  errorCallback = () => {},
) => {
  if (!auth.currentUser) {
    errorCallback(new Error('No user is signed in'));
  } else {
    await signOut(auth)
      .then(() => successCallback())
      .catch((err) => errorCallback(err));
  }
};

// successCallback should take a user argument
// errorCallback should take an error argument
// Throws: auth/popup-closed-by-user error
const googleSignIn = (
  successCallback = () => {},
  errorCallback = () => {},
) => {
  const authProvider = new GoogleAuthProvider();
  signInWithPopup(auth, authProvider, browserPopupRedirectResolver)
    .then((userCredential) => userCredential.user)
    .then((user) => successCallback(user))
    .catch((err) => errorCallback(err));
};

export {
  auth,
  userSignUp,
  deleteUserAccount,
  emailPasswordSignIn,
  googleSignIn,
  userSignOut,
  handleAuthStateChange,
  emailValid,
  passwordValid,
};
