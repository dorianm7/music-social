import React from 'react';
import './App.css';

import MainPage from '../MainPage/MainPage';
import ModalContainer from '../../components/hocs/ModalContainer';
import ToastContainer from '../../components/hocs/ToastContainer';

function App() {
  const MainPageModalToastContainer = ToastContainer(ModalContainer(MainPage));

  return (
    <div className="App">
      <MainPageModalToastContainer />
    </div>
  );
}

export default App;
