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
import PrivateRoute from '../../components/routing/PrivateRoute/PrivateRoute';
import MainPage from '../pages/MainPage/MainPage';
import SpotifyAuthorizeCallbackPage from '../pages/SpotifyAuthorizeCallbackPage/SpotifyAuthorizeCallbackPage';
import InAppPage from '../InAppPage/InAppPage';
import Modal from '../../components/Modal/Modal';
import Toast from '../../components/Toast/Toast';
import SettingsPageContents from '../page-contents/SettingsPageContents/SettingsPageContents';
import HomePageContents from '../page-contents/HomePageContents/HomePageContents';

function App() {
  const [modalContents, setModalContents] = useState(null);
  const [modalHeading, setModalHeading] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [inAppPageTitle, setInAppPageTitle] = useState('');
  const toast = (message, time) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    },
    time);
  };

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
                <MainPage
                  setModalContents={setModalContents}
                  setModalHeading={setModalHeading}
                  setModalOpen={setModalOpen}
                  toast={toast}
                />
              )}
            />
            <Route element={<PrivateRoute />}>
              <Route element={<InAppPage pageTitle={inAppPageTitle} />}>
                <Route
                  path="/home"
                  element={(
                    <HomePageContents
                      setInAppPageTitle={setInAppPageTitle}
                      toast={toast}
                    />
                  )}
                />
                <Route
                  path="/settings"
                  element={(
                    <SettingsPageContents
                      setModalContents={setModalContents}
                      setModalHeading={setModalHeading}
                      setModalOpen={setModalOpen}
                      setInAppPageTitle={setInAppPageTitle}
                      toast={toast}
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
      {toastVisible && (
        <Toast message={toastMessage} />
      )}
    </div>
  );
}

export default App;
