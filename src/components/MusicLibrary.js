import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/MusicLibrary.css';

import BasicPlaylist from './BasicPlaylist';

function MusicLibrary(props) {
  const {
    children,
  } = props;

  return (
    <div className="music-library">
      {children}
    </div>
  );
}

MusicLibrary.propTypes = {
  children: PropTypes.node,
};

MusicLibrary.defaultProps = {
  children: <BasicPlaylist />,
};

export default MusicLibrary;
