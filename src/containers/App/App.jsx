import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

import { UserContextProvider } from '../../contexts/UserContext';
import ToastContainer from '../../components/hocs/ToastContainer';
import PrivateRoute from '../../components/routing/PrivateRoute/PrivateRoute';
import MainPage from '../pages/MainPage/MainPage';
import HomePage from '../pages/HomePage/HomePage';

function App() {
  const MainPageToastContainer = ToastContainer(MainPage);

  return (
    <div className="App">
      <UserContextProvider>
        <Router
          baseName="/"
        >
          <Routes>
            <Route
              index
              path="/"
              element={<MainPageToastContainer />}
            />
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<HomePage />} />
            </Route>
            <Route
              path="*"
              element={<>404 Not Found</>}
            />
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
