import {
  React,
  useEffect,
} from 'react';
import {
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

function SpotifyAuthorizeCallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fromPath = searchParams.get('fromPath');
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
      const accessToken = searchParams.get('access_token');
      const expires = searchParams.get('expires_in');
      localStorage.setItem('spotify_access_token', accessToken);
      localStorage.setItem('spotify_access_token_expires_in', expires);
      localStorage.setItem('spotify_access_token_timestamp', Date.now());
      redirectPath = fromPath;
    }
    navigate(redirectPath);
  }, []);
  return <></>;
}

export default SpotifyAuthorizeCallbackPage;
