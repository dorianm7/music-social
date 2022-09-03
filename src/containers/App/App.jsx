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
            {/* Need to make protected routes */}
            <Route
              path="/compare"
              element={<CompareLibraryPage />}
            />
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
