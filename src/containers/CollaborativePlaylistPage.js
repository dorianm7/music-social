import React from 'react';
import PropTypes from 'prop-types';

import InAppPage from './InAppPage';
import CollaborativePlaylistPageContents from './page-contents/CollaborativePlaylistPageContents';
import localPlaylist from '../local_data/Playlist_0.json';

function CollaborativePlaylistPage(props) {
  const {
    sideMenuOnClick,
    notificationsOnClick,
    hasNotification,
    userImages,
    userNames,
    userIds,
    playlistName,
    playlist,
  } = props;
  return (
    <InAppPage
      sideMenuOnClick={sideMenuOnClick}
      notificationsOnClick={notificationsOnClick}
      hasNotification={hasNotification}
      pageTitle="Collaborative Playlist"
    >
      <CollaborativePlaylistPageContents
        userImages={userImages}
        userNames={userNames}
        userIds={userIds}
        playlistName={playlistName}
        playlist={playlist}
      />
    </InAppPage>
  );
}

CollaborativePlaylistPage.propTypes = {
  sideMenuOnClick: PropTypes.func,
  notificationsOnClick: PropTypes.func,
  hasNotification: PropTypes.bool,
  userImages: PropTypes.arrayOf(PropTypes.string),
  userNames: PropTypes.arrayOf(PropTypes.string),
  userIds: PropTypes.arrayOf(PropTypes.string),
  playlistName: PropTypes.string,
  playlist: PropTypes.shape({
    __comment: PropTypes.string,
    href: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    limit: PropTypes.number,
    next: PropTypes.string,
    offset: PropTypes.number,
    previous: PropTypes.string,
    total: PropTypes.number,
  }),
};

CollaborativePlaylistPage.defaultProps = {
  sideMenuOnClick: () => { window.alert('Side Menu button clicked'); },
  notificationsOnClick: () => { window.alert('Notifications button clicked'); },
  hasNotification: false,
  userImages: [
    'https://www.thispersondoesnotexist.com/image',
    'https://www.thispersondoesnotexist.com/image',
  ],
  userNames: [
    'User 1',
    'User 2',
  ],
  userIds: [
    'id0',
    'id1',
  ],
  playlistName: 'Playlist Name',
  playlist: localPlaylist,
};

export default CollaborativePlaylistPage;