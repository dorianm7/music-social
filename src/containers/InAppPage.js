import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/InAppPage.css';

import AppNav from '../components/AppNav';

function InAppPage(props) {
  const {
    sideMenuOnClick,
    notificationsOnClick,
    hasNotification,
    pageTitle,
    children,
  } = props;
  return (
    <div className="in-app-page">
      <header>
        <AppNav
          menuButtonSize="25px"
          menuButtonOnClick={sideMenuOnClick}
          notificationsButtonSize="25px"
          notificationsButtonOnClick={notificationsOnClick}
          notificationsIndicatorOn={hasNotification}
          navText="Temp App Name"
        />
      </header>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <p>Temp Footer</p>
      </footer>
    </div>
  );
}

InAppPage.propTypes = {
  sideMenuOnClick: PropTypes.func,
  notificationsOnClick: PropTypes.func,
  hasNotification: PropTypes.bool,
  pageTitle: PropTypes.string,
  children: PropTypes.node,
};

InAppPage.defaultProps = {
  sideMenuOnClick: () => { window.alert('Side menu button clicked'); },
  notificationsOnClick: () => { window.alert('Notifications button clicked'); },
  hasNotification: false,
  pageTitle: 'In-app Page',
  children: <>Children</>,
};

export default InAppPage;
