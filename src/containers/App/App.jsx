import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

import { UserContextProvider } from '../../contexts/UserContext';
import MainPage from '../pages/MainPage/MainPage';
import CompareLibraryPage from '../pages/CompareLibraryPage/CompareLibaryPage';
import ToastContainer from '../../components/hocs/ToastContainer';
import PrivateRoute from '../../components/routing/PrivateRoute/PrivateRoute';

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
              <Route path="/compare" element={<CompareLibraryPage />} />
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
