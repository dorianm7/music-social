import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

import MainPage from '../pages/MainPage/MainPage';
import ToastContainer from '../../components/hocs/ToastContainer';

function App() {
  const MainPageToastContainer = ToastContainer(MainPage);

  return (
    <div className="App">
      <Router
        baseName="/"
      >
        <Routes>
          <Route
            path="/"
            element={<MainPageToastContainer />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
