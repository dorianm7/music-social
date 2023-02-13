import {
  React,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

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
  const {
    setInAppPageTitle,
    toast,
  } = props;
  const [syncDate, setSyncDate] = useState((new Date(0)));
  const [libraryTotals, setLibraryTotals] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useUserContext();
  const navigate = useNavigate();
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
    .catch((e) => toast(e.message), 4000);

  const hasSynced = syncDate.getTime() > (new Date(0)).getTime();

  const syncedClassName = hasSynced ? 'synced' : 'not-synced';

  return loading
    ? <></>
    : (
      <>
        {!authorized && (
          <div className="home-page-contents not-authorized center-column">
            <h2>Spotify authorization needed to use this app</h2>
            <BasicButton
              onClick={() => navigate('/settings')}
            >
              Open settings
            </BasicButton>
          </div>
        )}
        {authorized && (
          <div className={`home-page-contents authorized ${syncedClassName} center-column`}>
            {!hasSynced && (<h2>No library info</h2>)}
            {hasSynced && (
              <>
                <h2>Library info</h2>
                <LibraryInfo
                  albumsTotal={libraryTotals.albums}
                  artistsTotal={libraryTotals.artists}
                  playlistsTotal={libraryTotals.playlists}
                />
              </>
            )}
            <BasicButton
              onClick={syncButtonHandler}
            >
              Sync music library
            </BasicButton>
            {hasSynced && (
              <span className="sync-text">
                {`Last sync: ${syncDate.toLocaleString()}`}
              </span>
            )}
          </div>
        )}
      </>
    );
}

HomePageContents.propTypes = {
  setInAppPageTitle: PropTypes.func,
  toast: PropTypes.func,
};

HomePageContents.defaultProps = {
  setInAppPageTitle: () => {},
  toast: () => {},
};

export default HomePageContents;
