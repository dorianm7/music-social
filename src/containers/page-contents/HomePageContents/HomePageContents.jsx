import {
  React,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import './HomePageContents.css';

import { getUser } from '../../../backend/users/users';
import { isAuthorized } from '../../../backend/spotify/spotify-auth';

import BasicButton from '../../../components/basic/BasicButton/BasicButton';
import { useUserContext } from '../../../contexts/UserContext';
import LibraryInfo from '../../../components/LibraryInfo/LibraryInfo';

function HomePageContents(props) {
  const { setInAppPageTitle } = props;
  const [syncData, setSyncData] = useState((new Date(0)));
  const [loading, setLoading] = useState(true);
  const user = useUserContext();
  const authorized = isAuthorized();

  useEffect(async () => {
    setInAppPageTitle('Home');
    document.title = 'Music Social | Home';
    const userRes = await getUser(user.uid, ['spotify_albums']);
    const spotifyAlbums = userRes.data.spotify_albums;
    setSyncData(new Date(spotifyAlbums.last_updated));
    setLoading(false);
  }, []);

  const hasSynced = syncData.getTime() > (new Date(0)).getTime();

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
            <LibraryInfo />
            <BasicButton>Sync music library</BasicButton>
            <span>
              Last sync:
              {syncData.toLocaleString()}
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
