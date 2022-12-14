import React from 'react';
import PropTypes from 'prop-types';

import './SettingsPageContents.css';

import BasicButton from '../../../components/basic/BasicButton/BasicButton';

function SettingsPageContents(props) {
  const {
    authorizedSpotify,
    authorizeSpotifyOnClick,
    deauthorizeSpotifyOnClick,
    deleteAccountOnClick,
  } = props;
  const authorizeButtonText = authorizedSpotify ? 'Deauthorize Spotify' : 'Authorize Spotify';
  const authorizeButtonOnClick = authorizedSpotify
    ? deauthorizeSpotifyOnClick
    : authorizeSpotifyOnClick;
  return (
    <>
      <BasicButton onClick={authorizeButtonOnClick}>
        {authorizeButtonText}
      </BasicButton>
      <BasicButton onClick={deleteAccountOnClick}>
        Delete Account
      </BasicButton>
    </>
  );
}

SettingsPageContents.propTypes = {
  authorizedSpotify: PropTypes.bool,
  authorizeSpotifyOnClick: PropTypes.func,
  deauthorizeSpotifyOnClick: PropTypes.func,
  deleteAccountOnClick: PropTypes.func,
};

SettingsPageContents.defaultProps = {
  authorizedSpotify: false,
  authorizeSpotifyOnClick: () => {},
  deauthorizeSpotifyOnClick: () => {},
  deleteAccountOnClick: () => {},
};

export default SettingsPageContents;
