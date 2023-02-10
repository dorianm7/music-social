import React, {
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import {
  EmailAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';
import { handleAuthStateChange } from '../firebase/auth-firebase';

const UserContext = createContext(null);

const useUserContext = () => useContext(UserContext); // Returns current context value

const MockEmailPasswordUser = {
  uid: '1234567890',
  email: 'mockEmail@email.com',
  emailVerified: false,
  isAnonymous: false,
  providerData: [{
    providerId: EmailAuthProvider.PROVIDER_ID,
    uid: 'mockEmail@email.com',
    displayName: null,
    email: 'mockEmail@email.com',
    phoneNumber: null,
    photoUrl: null,
  }],
  stsTokenManager: {
    refreshToken: 'refreshToken',
    accessToken: 'accessToken',
    expirationTime: 12345678,
  },
  createdAt: '12345678',
  lastLoginAt: '12345678',
  apiKey: 'apiKey',
  appName: '[DEFAULT]',
};

const MockGoogleUser = {
  uid: '1234567890',
  email: 'mockEmail@gmail.com',
  emailVerified: true,
  displayName: 'Google User',
  isAnonymous: false,
  photoUrl: 'https://www.thispersondoesnotexist.com/image',
  providerData: [{
    providerId: GoogleAuthProvider.PROVIDER_ID,
    uid: '1234567890',
    displayName: 'Google User',
    email: 'mockEmail@gmail.com',
    phoneNumber: null,
    photoUrl: 'https://www.thispersondoesnotexist.com/image',
  }],
  stsTokenManager: {
    refreshToken: 'refreshToken',
    accessToken: 'accessToken',
    expirationTime: 12345678,
  },
  createdAt: '12345678',
  lastLoginAt: '12345678',
  apiKey: 'apiKey',
  appName: '[DEFAULT]',
};

function UserContextProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { children } = props;

  useEffect(() => {
    handleAuthStateChange(
      (userObj) => {
        setUser(userObj);
        setLoading(false);
      },
    );
  }, []);

  return (
    <UserContext.Provider value={user}>
      { !loading && children }
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node,
};

UserContextProvider.defaultProps = {
  children: <span>Children</span>,
};

export {
  useUserContext,
  UserContext,
  UserContextProvider,
  MockEmailPasswordUser,
  MockGoogleUser,
};
