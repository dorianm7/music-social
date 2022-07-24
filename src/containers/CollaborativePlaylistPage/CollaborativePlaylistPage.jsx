import React from 'react';
import PropTypes from 'prop-types';

import CollaborativePlaylistPageContents from
  '../page-contents/CollaborativePlaylistPageContents/CollaborativePlaylistPageContents';
import InAppPage from '../InAppPage/InAppPage';

import localPlaylist from '../../local_data/Playlist_0.json';

function CollaborativePlaylistPage(props) {
  const {
    sideMenuOnClick,
    notificationsOnClick,
    hasNotification,
    userImages,
    usernames,
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
        usernames={usernames}
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
  usernames: PropTypes.arrayOf(PropTypes.string),
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
  sideMenuOnClick: () => {},
  notificationsOnClick: () => {},
  hasNotification: false,
  userImages: [
    'https://www.thispersondoesnotexist.com/image',
    'https://www.thispersondoesnotexist.com/image',
  ],
  usernames: [
    'User1',
    'User2',
  ],
  userIds: [
    'id0',
    'id1',
  ],
  playlistName: 'Playlist Name',
  playlist: localPlaylist,
};

export default CollaborativePlaylistPage;
