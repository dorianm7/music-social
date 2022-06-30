import React from 'react';
import PropTypes from 'prop-types';

import '../../stylesheets/page-contents/CollaborativePlaylistPageContents.css';

import UserImages from '../../components/UserImages';
import BasicPlaylist from '../../components/BasicPlaylist';
import localPlaylist from '../../local_data/Playlist_0.json';
import PlaylistHeader from '../../components/PlaylistHeader';

function CollaborativePlaylistPageContents(props) {
  const {
    userImages,
    userNames,
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
        names={userNames}
        userIds={userIds}
      />
      <BasicPlaylist
        playlistHeader={playlistHeader}
        isCollaborative
        showSearch
        type="collaborative"
        selectOptions={['Recent', 'Latest']}
        onSelectOptionClick={onPlaylistSelectOptionClick}
        playlist={playlist}
      />
    </>
  );
}

CollaborativePlaylistPageContents.propTypes = {
  userImages: PropTypes.arrayOf(PropTypes.string),
  userNames: PropTypes.arrayOf(PropTypes.string),
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
  userNames: [
    'User 1',
    'User 2',
  ],
  userIds: [
    'id0',
    'id1',
  ],
  playlistHeadingType: 'h2',
  playlistName: 'Playlist Name',
  playlistRunningTime: -1,
  playlist: localPlaylist,
  onPlaylistSelectOptionClick: (option) => { console.log(`${option} clicked`); },
};

export default CollaborativePlaylistPageContents;
