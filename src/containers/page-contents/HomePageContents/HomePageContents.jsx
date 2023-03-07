import {
  React,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  useNavigate,
  useOutletContext,
} from 'react-router-dom';

import './HomePageContents.css';

import { getUser } from '../../../backend/users/users';
import { syncLibrary } from '../../../backend/app/spotify';
import { getAccessToken } from '../../../backend/spotify/spotify-auth';

import BasicButton from '../../../components/basic/BasicButton/BasicButton';
import { useUserContext } from '../../../contexts/UserContext';
import LibraryInfo from '../../../components/LibraryInfo/LibraryInfo';
import PercentGauge from '../../../components/basic/PercentGauge/PercentGauge';

function HomePageContents(props) {
  const {
    setInAppPageTitle,
    toast,
  } = props;
  const [syncDate, setSyncDate] = useState((new Date(0)));
  const [libraryTotals, setLibraryTotals] = useState(null);
  const [contentLoading, setContentLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const user = useUserContext();
  const [hasAuthorizedSpotify] = useOutletContext();
  const navigate = useNavigate();

  useEffect(async () => {
    setInAppPageTitle('Home');
    document.title = 'Music Social | Home';
    const userFromDb = await getUser(user.uid, [
      'spotify_albums',
      'spotify_artists',
      'spotify_playlists',
    ]);
    setSyncDate(new Date(userFromDb.spotify_albums.last_updated));
    setLibraryTotals({
      albums: userFromDb.spotify_albums.total,
      artists: userFromDb.spotify_artists.total,
      playlists: userFromDb.spotify_playlists.total,
    });
    setContentLoading(false);
  }, [syncing]);

  const syncButtonHandler = () => {
    setSyncing(true);
    getAccessToken(user.uid)
      .then((accessToken) => syncLibrary(user.uid, accessToken))
      .catch((e) => toast(e.message), 4000)
      .finally(() => setSyncing(false));
  };

  const hasSynced = syncDate.getTime() > (new Date(0)).getTime();

  const syncedClassName = hasSynced ? 'synced' : 'not-synced';

  return contentLoading
    ? <></>
    : (
      <>
        {!hasAuthorizedSpotify && (
          <div className="home-page-contents not-authorized center-column">
            <h2>Spotify authorization needed to use this app</h2>
            <BasicButton
              onClick={() => navigate('/settings')}
            >
              Open settings
            </BasicButton>
          </div>
        )}
        {hasAuthorizedSpotify && (
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
            {!syncing && (
              <BasicButton
                onClick={syncButtonHandler}
              >
                Sync music library
              </BasicButton>
            )}
            {syncing && (
              <PercentGauge
                percentFilled={10}
                size="1em"
              />
            )}
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
