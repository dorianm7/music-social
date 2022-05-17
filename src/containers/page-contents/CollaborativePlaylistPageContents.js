import React from 'react';
import PropTypes from 'prop-types';

import '../../stylesheets/page-contents/CollaborativePlaylistPageContents.css';

import UserImages from '../../components/UserImages';
import BasicPlaylist from '../../components/BasicPlaylist';
import localPlaylist from '../../local_data/Playlist_0.json';

function CollaborativePlaylistPageContents(props) {
  const {
    userImages,
    userNames,
    userIds,
    playlistName,
    playlist,
  } = props;

  return (
    <>
      <UserImages
        imgSrcs={userImages}
        names={userNames}
        userIds={userIds}
      />
      <BasicPlaylist
        playlistHeader={playlistName}
        isCollaborative
        showSearch
        items={playlist.items}
      />
    </>
  );
}

CollaborativePlaylistPageContents.propTypes = {
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

CollaborativePlaylistPageContents.defaultProps = {
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

export default CollaborativePlaylistPageContents;