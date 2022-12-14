import React, {
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { handleAuthStateChange } from '../firebase/auth-firebase';

const UserContext = createContext(null);

const useUserContext = () => useContext(UserContext); // Returns current context value

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
};
