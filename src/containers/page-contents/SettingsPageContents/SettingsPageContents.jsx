import React from 'react';
import PropTypes from 'prop-types';

import './SettingsPageContents.css';

import BasicButton from '../../../components/basic/BasicButton/BasicButton';
import AnchorButton from '../../../components/basic/AnchorButton/AnchorButton';

function SettingsPageContents(props) {
  const {
    authorizedSpotify,
    authorizeSpotifyHref,
    deauthorizeSpotifyOnClick,
    deleteAccountOnClick,
  } = props;
  const spotifyAuthorizeButton = authorizedSpotify
    ? <BasicButton onClick={deauthorizeSpotifyOnClick}>Deauthorize Spotify</BasicButton>
    : <AnchorButton href={authorizeSpotifyHref} text="Authorize Spotify" />;
  return (
    <div className="settings-page-contents">
      {spotifyAuthorizeButton}
      <BasicButton onClick={deleteAccountOnClick}>
        Delete Account
      </BasicButton>
    </div>
  );
}

SettingsPageContents.propTypes = {
  authorizedSpotify: PropTypes.bool,
  authorizeSpotifyHref: PropTypes.string,
  deauthorizeSpotifyOnClick: PropTypes.func,
  deleteAccountOnClick: PropTypes.func,
};

SettingsPageContents.defaultProps = {
  authorizedSpotify: false,
  authorizeSpotifyHref: '',
  deauthorizeSpotifyOnClick: () => {},
  deleteAccountOnClick: () => {},
};

export default SettingsPageContents;
