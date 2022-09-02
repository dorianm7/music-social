import React from 'react';
import './App.css';

import MainPage from '../pages/MainPage/MainPage';
import ToastContainer from '../../components/hocs/ToastContainer';

function App() {
  const MainPageToastContainer = ToastContainer(MainPage);

  return (
    <div className="App">
      <MainPageToastContainer />
    </div>
  );
}

export default App;
