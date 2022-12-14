import React from 'react';
import PropTypes from 'prop-types';

import './SettingsPageContents.css';

import BasicButton from '../../../components/basic/BasicButton/BasicButton';

function SettingsPageContents(props) {
  const {
    authorizedSpotify,
  } = props;
  const authorizeButtonText = authorizedSpotify ? 'Deauthorize Spotify' : 'Authorize Spotify';
  return (
    <>
      <BasicButton>
        {authorizeButtonText}
      </BasicButton>
      <BasicButton>
        Delete Account
      </BasicButton>
    </>
  );
}

SettingsPageContents.propTypes = {
  authorizedSpotify: PropTypes.bool,
};

SettingsPageContents.defaultProps = {
  authorizedSpotify: false,
};

export default SettingsPageContents;
