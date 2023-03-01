import {
  React,
  useEffect,
} from 'react';
import {
  useNavigate,
  useOutletContext,
  useSearchParams,
} from 'react-router-dom';
import { SPOTIFY_SESSION_STORAGE_KEYS } from '../../../backend/spotify/spotify-auth-helpers';

function SpotifyAuthorizeCallbackPage() {
  const [searchParams] = useSearchParams();
  const [, setHasAuthorized] = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    const fromPathSearchParam = searchParams.get('fromPath');
    const fromPath = decodeURIComponent(fromPathSearchParam);
    const error = searchParams.get('error');
    let redirectPath;
    if (error) {
      const detail = searchParams.get('detail');
      const urlParamsObj = {
        error,
        detail,
      };
      const urlParams = new URLSearchParams(urlParamsObj);
      // only adding errors to redirect page query string for now
      redirectPath = `${fromPath}/?${urlParams.toString()}`;
    } else {
      const accessTokenParam = searchParams.get('access_token');
      const expiresInParam = searchParams.get('expires_in');
      const {
        accessToken,
        expiresIn,
        timestamp,
      } = SPOTIFY_SESSION_STORAGE_KEYS;
      sessionStorage.setItem(accessToken, accessTokenParam);
      sessionStorage.setItem(expiresIn, expiresInParam);
      sessionStorage.setItem(timestamp, Date.now());
      setHasAuthorized(true);
      redirectPath = fromPath;
    }
    navigate(redirectPath);
  }, []);
  return <></>;
}

export default SpotifyAuthorizeCallbackPage;
