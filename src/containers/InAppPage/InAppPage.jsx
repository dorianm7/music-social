import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Outlet, useNavigate } from 'react-router-dom';
import { signOutUser } from '../../backend/app/user';

import './InAppPage.css';

import AppNav from '../../components/AppNav/AppNav';
import Footer from '../../components/Footer/Footer';
import SideMenu from '../../components/SideMenu/SideMenu';

function InAppPage(props) {
  const {
    sideMenuOnClick,
    notificationsOnClick,
    hasNotification,
    pageTitle,
  } = props;
  const [sideMenuVisible, setSideMenuVisible] = useState(false);
  const navigate = useNavigate();

  const sideMenuSettingsOnClick = () => {
    setSideMenuVisible(!sideMenuVisible);
    navigate('/settings');
  };
  const sideMenuHomeOnClick = () => {
    setSideMenuVisible(!sideMenuVisible);
    navigate('/home');
  };

  return (
    <div className="in-app-page">
      <header>
        <AppNav
          menuButtonSize="25px"
          menuButtonOnClick={() => {
            setSideMenuVisible(!sideMenuVisible);
            sideMenuOnClick();
          }}
          notificationsButtonSize="25px"
          notificationsButtonOnClick={notificationsOnClick}
          notificationsIndicatorOn={hasNotification}
          navText="Music Social"
        />
      </header>
      {sideMenuVisible && (
        <SideMenu
          settingsOnClick={sideMenuSettingsOnClick}
          homeOnClick={sideMenuHomeOnClick}
          signOutOnClick={signOutUser}
        />
      )}
      <main>
        <h1>{pageTitle}</h1>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

InAppPage.propTypes = {
  sideMenuOnClick: PropTypes.func,
  notificationsOnClick: PropTypes.func,
  hasNotification: PropTypes.bool,
  pageTitle: PropTypes.string,
};

InAppPage.defaultProps = {
  sideMenuOnClick: () => {},
  notificationsOnClick: () => {},
  hasNotification: false,
  pageTitle: 'In-app Page',
};

export default InAppPage;
