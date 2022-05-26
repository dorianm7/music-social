import React from 'react';
import PropTypes from 'prop-types';

import Comparison from '../../components/Comparison';
import MusicLibrary from '../../components/MusicLibrary';
import BasicPlaylist from '../../components/BasicPlaylist';
import PlaylistHeader from '../../components/PlaylistHeader';

import defaultImg from '../../images/help-rhombus-outline.svg';
import artists from '../../local_data/Users_Artists_0.json';
import albums from '../../local_data/Users_Albums_0.json';
import userPlaylists from '../../local_data/Users_Playlists.json';

function CompareLibraryPageContents(props) {
  const {
    firstUserImg,
    firstUserName,
    secondUserImg,
    secondUserName,
    artistPercent,
    albumPercent,
    songPercent,
    artistList,
    albumList,
    playlistList,
  } = props;

  const playlistsHeadingType = 'h2';

  return (
    <>
      <Comparison
        firstUserImg={firstUserImg}
        firstUserName={firstUserName}
        secondUserImg={secondUserImg}
        secondUserName={secondUserName}
        artistPercent={artistPercent}
        albumPercent={albumPercent}
        songPercent={songPercent}
      />
      <MusicLibrary>
        <BasicPlaylist
          type="artist"
          playlistHeader={(
            <PlaylistHeader
              headingType={playlistsHeadingType}
              playlistName="Artists"
              totalRunningTime="-1" // Default value
              totalSongs={artistList.artists.total}
            />
          )}
          playlist={artistList}
        />
        <BasicPlaylist
          type="album"
          playlistHeader={(
            <PlaylistHeader
              headingType={playlistsHeadingType}
              playlistName="Albums"
              totalSongs={albumList.total}
              totalRunningTime="-1" // Default Value
            />
          )}
          playlist={albumList}
        />
        <BasicPlaylist
          type="playlist"
          playlistHeader={(
            <PlaylistHeader
              headingType={playlistsHeadingType}
              playlistName="Playlists"
              totalSongs={playlistList.total}
              totalRunningTime="-1" // Default Value
            />
          )}
          playlist={userPlaylists}
        />
      </MusicLibrary>
    </>
  );
}

CompareLibraryPageContents.propTypes = {
  firstUserImg: PropTypes.string,
  firstUserName: PropTypes.string,
  secondUserImg: PropTypes.string,
  secondUserName: PropTypes.string,
  artistPercent: PropTypes.string,
  albumPercent: PropTypes.string,
  songPercent: PropTypes.string,
  artistList: PropTypes.shape({
    artists: PropTypes.shape({
      href: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.object),
      limit: PropTypes.number,
      next: PropTypes.string,
      cursors: PropTypes.shape({
        after: PropTypes.string,
      }),
      total: PropTypes.number,
    }),
  }),
  albumList: PropTypes.shape({
    __comment: PropTypes.string,
    href: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    limit: PropTypes.number,
    next: PropTypes.string,
    offset: PropTypes.number,
    previous: PropTypes.string,
    total: PropTypes.number,
  }),
  playlistList: PropTypes.shape({
    href: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    limit: PropTypes.number,
    next: PropTypes.string,
    offset: PropTypes.number,
    previous: PropTypes.string,
    total: PropTypes.number,
  }),
};

CompareLibraryPageContents.defaultProps = {
  firstUserImg: defaultImg,
  firstUserName: 'User 1',
  secondUserImg: defaultImg,
  secondUserName: 'User 2',
  artistPercent: '50',
  albumPercent: '50',
  songPercent: '50',
  artistList: artists,
  albumList: albums,
  playlistList: userPlaylists,
};

export default CompareLibraryPageContents;
