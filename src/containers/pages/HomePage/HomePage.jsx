import React from 'react';
import PropTypes from 'prop-types';
import InAppPage from '../../InAppPage/InAppPage';
import HomePageContents from '../../page-contents/HomePageContents/HomePageContents';

function HomePage(props) {
  const {
    sideMenuOnClick,
    notificationsOnClick,
    hasNotification,
  } = props;

  return (
    <InAppPage
      pageTitle="Home"
      sideMenuOnClick={sideMenuOnClick}
      notificationsOnClick={notificationsOnClick}
      hasNotification={hasNotification}
    >
      <HomePageContents />
    </InAppPage>
  );
}

HomePage.propTypes = {
  sideMenuOnClick: PropTypes.func,
  notificationsOnClick: PropTypes.func,
  hasNotification: PropTypes.bool,
};

HomePage.defaultProps = {
  sideMenuOnClick: () => {},
  notificationsOnClick: () => {},
  hasNotification: false,
};

export default HomePage;
