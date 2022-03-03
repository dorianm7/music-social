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

const auth = getAuth(app);

// successCallback should take a user argument
// errorCallback should take an error argument
const createUser = (
  email,
  password,
  successCallback = () => {},
  errorCallback = () => {},
) => {
  // Check email is valid
  // check password is valid
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user)
    .then((user) => {
      successCallback(user);
    })
    .catch((err) => {
      errorCallback(err);
    });
};

// Initial implementation ONLY used for testing
// errorCallback should take an error argument
const deleteUserAccount = (
  successCallback = () => {},
  errorCallback = () => {},
) => {
  if (!auth.currentUser) {
    errorCallback(new Error('Can\'t delete user because no user is signed in'));
  } else {
    deleteUser(auth.currentUser)
      .then(() => {
        successCallback();
      })
      .catch((err) => {
        errorCallback(err);
      });
  }
};

// successCallback should take a user argument
// errorCallback should take an error argument
const emailPasswordSignIn = (
  email,
  password,
  successCallback = () => {},
  errorCallback = () => {},
) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user)
    .then((user) => {
      successCallback(user);
    })
    .catch((err) => {
      errorCallback(err);
    });
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
    (user) => {
      onChangeCallback(user);
    },
    errorCallback,
    completedCallback,
  );
  return unsub;
};

// successCallback should take no arguments
// errorCallback should take an error argument
const userSignOut = (
  successCallback = () => {},
  errorCallback = () => {},
) => {
  signOut(auth)
    .then(() => {
      successCallback();
    })
    .catch((err) => {
      errorCallback(err);
    });
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
    .then((user) => {
      successCallback(user);
    })
    .catch((err) => {
      errorCallback(err);
    });
};

export {
  auth,
  createUser,
  deleteUserAccount,
  emailPasswordSignIn,
  googleSignIn,
  userSignOut,
  handleAuthStateChange,
};
