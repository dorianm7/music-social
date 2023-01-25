import {
  React,
  useEffect,
} from 'react';
import {
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { SPOTIFY_LOCAL_STORAGE_KEYS } from '../../../backend/spotify/spotify-auth-helpers';

function SpotifyAuthorizeCallbackPage() {
  const [searchParams] = useSearchParams();
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
      } = SPOTIFY_LOCAL_STORAGE_KEYS;
      localStorage.setItem(accessToken, accessTokenParam);
      localStorage.setItem(expiresIn, expiresInParam);
      localStorage.setItem(timestamp, Date.now());
      redirectPath = fromPath;
    }
    navigate(redirectPath);
    navigate(0);
  }, []);
  return <></>;
}

export default SpotifyAuthorizeCallbackPage;
