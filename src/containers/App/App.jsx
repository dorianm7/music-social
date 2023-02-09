/* eslint-disable react/jsx-props-no-spreading */
import {
  React,
  useState,
} from 'react';
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
import SpotifyAuthorizeCallbackPage from '../pages/SpotifyAuthorizeCallbackPage/SpotifyAuthorizeCallbackPage';
import InAppPage from '../InAppPage/InAppPage';
import Modal from '../../components/modals/Modal/Modal';
import SettingsPageContents from '../page-contents/SettingsPageContents/SettingsPageContents';
import HomePageContents from '../page-contents/HomePageContents/HomePageContents';

function App() {
  const [modalContents, setModalContents] = useState(null);
  const [modalHeading, setModalHeading] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const MainPageWithProps = (props) => (
    <MainPage
      {...props}
      setModalContents={setModalContents}
      setModalHeading={setModalHeading}
      setModalOpen={setModalOpen}
    />
  );
  const MainPageToastContainer = ToastContainer(MainPageWithProps);

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
              element={(
                <MainPageToastContainer />
              )}
            />
            <Route element={<PrivateRoute />}>
              <Route element={<InAppPage />}>
                <Route path="/home" element={<HomePageContents />} />
                <Route
                  path="/settings"
                  element={(
                    <SettingsPageContents
                      setModalContents={setModalContents}
                      setModalHeading={setModalHeading}
                      setModalOpen={setModalOpen}
                    />
                  )}
                />
              </Route>
              <Route path="/spotify-authorize-callback" element={<SpotifyAuthorizeCallbackPage />} />
            </Route>
            <Route
              path="*"
              element={<>404 Not Found</>}
            />
          </Routes>
        </Router>
      </UserContextProvider>
      <Modal
        contents={modalContents}
        heading={modalHeading}
        open={modalOpen}
        closeHandler={() => setModalOpen(!modalOpen)}
      />
    </div>
  );
}

export default App;
