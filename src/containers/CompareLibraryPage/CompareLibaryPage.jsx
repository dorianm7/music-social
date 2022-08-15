import React from 'react';
import PropTypes from 'prop-types';

import CompareLibraryPageContents from '../page-contents/CompareLibraryPageContents/CompareLibraryPageContents';
import InAppPage from '../InAppPage/InAppPage';

import usersPlaylists from '../../local_data/Users_Playlists.json';
import usersAlbums from '../../local_data/Users_Albums_0.json';
import usersArtists from '../../local_data/Users_Artists_0.json';

function CompareLibraryPage(props) {
  const {
    firstUserImg,
    firstUsername,
    secondUserImg,
    secondUsername,
    artistPercent,
    albumPercent,
    playlistPercent,
    artistList,
    albumList,
    playlistList,
    sideMenuOnClick,
    notificationsOnClick,
    hasNotification,
  } = props;

  return (
    <InAppPage
      pageTitle="Comparison"
      sideMenuOnClick={sideMenuOnClick}
      notificationsOnClick={notificationsOnClick}
      hasNotification={hasNotification}
    >
      <CompareLibraryPageContents
        firstUserImg={firstUserImg}
        firstUsername={firstUsername}
        secondUserImg={secondUserImg}
        secondUsername={secondUsername}
        artistPercent={artistPercent}
        albumPercent={albumPercent}
        playlistPercent={playlistPercent}
        artistList={artistList}
        albumList={albumList}
        playlistList={playlistList}
      />
    </InAppPage>
  );
}

CompareLibraryPage.propTypes = {
  firstUserImg: PropTypes.string,
  firstUsername: PropTypes.string,
  secondUserImg: PropTypes.string,
  secondUsername: PropTypes.string,
  artistPercent: PropTypes.number,
  albumPercent: PropTypes.number,
  playlistPercent: PropTypes.number,
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
  sideMenuOnClick: PropTypes.func,
  notificationsOnClick: PropTypes.func,
  hasNotification: PropTypes.bool,
};

CompareLibraryPage.defaultProps = {
  firstUserImg: 'https://www.thispersondoesnotexist.com/image',
  firstUsername: 'User1',
  secondUserImg: 'https://www.thispersondoesnotexist.com/image',
  secondUsername: 'User2',
  artistPercent: 50,
  albumPercent: 50,
  playlistPercent: 50,
  artistList: usersArtists,
  albumList: usersAlbums,
  playlistList: usersPlaylists,
  sideMenuOnClick: () => {},
  notificationsOnClick: () => {},
  hasNotification: false,
};

export default CompareLibraryPage;
