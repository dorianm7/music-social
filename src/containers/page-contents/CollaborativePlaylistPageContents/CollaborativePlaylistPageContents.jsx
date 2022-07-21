import React from 'react';
import PropTypes from 'prop-types';

import './CollaborativePlaylistPageContents.css';

import UserImages from '../../../components/UserImages/UserImages';
import BasicPlaylist from '../../../components/BasicPlaylist/BasicPlaylist';
import localPlaylist from '../../../local_data/Playlist_0.json';
import PlaylistHeader from '../../../components/PlaylistHeader/PlaylistHeader';

function CollaborativePlaylistPageContents(props) {
  const {
    userImages,
    usernames,
    userIds,
    playlistHeadingType,
    playlistName,
    playlistRunningTime,
    playlist,
    onPlaylistSelectOptionClick,
  } = props;

  const playlistHeader = (
    <PlaylistHeader
      headingType={playlistHeadingType}
      playlistName={playlistName}
      totalItems={playlist.total}
      totalRunningTime={playlistRunningTime}
    />
  );

  return (
    <>
      <UserImages
        imgSrcs={userImages}
        usernames={usernames}
        userIds={userIds}
      />
      <BasicPlaylist
        playlistHeader={playlistHeader}
        isCollaborative
        showSearch
        type="collaborative"
        selectOptions={['Recent', 'Oldest']}
        onSelectOptionClick={onPlaylistSelectOptionClick}
        playlist={playlist}
      />
    </>
  );
}

CollaborativePlaylistPageContents.propTypes = {
  userImages: PropTypes.arrayOf(PropTypes.string),
  usernames: PropTypes.arrayOf(PropTypes.string),
  userIds: PropTypes.arrayOf(PropTypes.string),
  playlistHeadingType: PropTypes.string,
  playlistName: PropTypes.string,
  playlistRunningTime: PropTypes.number,
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
  onPlaylistSelectOptionClick: PropTypes.func,
};

CollaborativePlaylistPageContents.defaultProps = {
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
  playlistHeadingType: 'h2',
  playlistName: 'Playlist Name',
  playlistRunningTime: -1,
  playlist: localPlaylist,
  onPlaylistSelectOptionClick: (option) => option,
};

export default CollaborativePlaylistPageContents;
