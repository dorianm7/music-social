import React from 'react';
import '../stylesheets/App.css';

import MainPage from './MainPage';
import ModalContainer from '../components/hocs/ModalContainer';
import ToastContainer from '../components/hocs/ToastContainer';

function App() {
  const MainPageModalToastContainer = ToastContainer(ModalContainer(MainPage));

  return (
    <div className="App">
      <MainPageModalToastContainer />
    </div>
  );
}

export default App;
