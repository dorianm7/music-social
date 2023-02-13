import {
  React,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import './HomePageContents.css';

import { getUser } from '../../../backend/users/users';
import {
  getAccessToken,
  isAuthorized,
} from '../../../backend/spotify/spotify-auth';

import BasicButton from '../../../components/basic/BasicButton/BasicButton';
import { useUserContext } from '../../../contexts/UserContext';
import LibraryInfo from '../../../components/LibraryInfo/LibraryInfo';
import { syncLibrary } from '../../../backend/app/spotify';

function HomePageContents(props) {
  const { setInAppPageTitle } = props;
  const [syncDate, setSyncDate] = useState((new Date(0)));
  const [libraryTotals, setLibraryTotals] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useUserContext();
  const authorized = isAuthorized();

  useEffect(async () => {
    setInAppPageTitle('Home');
    document.title = 'Music Social | Home';
    const userRes = await getUser(user.uid, [
      'spotify_albums',
      'spotify_artists',
      'spotify_playlists',
    ]);
    setSyncDate(new Date(userRes.data.spotify_albums.last_updated));
    setLibraryTotals({
      albums: userRes.data.spotify_albums.total,
      artists: userRes.data.spotify_artists.total,
      playlists: userRes.data.spotify_playlists.total,
    });
    setLoading(false);
  }, []);

  const syncButtonHandler = () => getAccessToken(user.uid)
    .then((accessToken) => syncLibrary(user.uid, accessToken))
    .catch((e) => console.log(e));

  const hasSynced = syncDate.getTime() > (new Date(0)).getTime();

  return loading
    ? <></>
    : (
      <>
        {!authorized && (
          <div className="not-authorized center-column">
            <span>Spotify authorization needed to use this app</span>
            <BasicButton>Open settings</BasicButton>
          </div>
        )}
        {authorized && !hasSynced && (
          <div className="authorized not-synced center-column">
            <span>No library info</span>
            <BasicButton>Sync music library</BasicButton>
          </div>
        )}
        {authorized && hasSynced && (
          <div className="authorized synced center-column">
            <span>Library info</span>
            <LibraryInfo
              albumsTotal={libraryTotals.albums}
              artistsTotal={libraryTotals.artists}
              playlistsTotal={libraryTotals.playlists}
            />
            <BasicButton
              onClick={syncButtonHandler}
            >
              Sync music library
            </BasicButton>
            <span>
              Last sync:
              {syncDate.toLocaleString()}
            </span>
          </div>
        )}
      </>
    );
}

HomePageContents.propTypes = {
  setInAppPageTitle: PropTypes.func,
};

HomePageContents.defaultProps = {
  setInAppPageTitle: () => {},
};

export default HomePageContents;
