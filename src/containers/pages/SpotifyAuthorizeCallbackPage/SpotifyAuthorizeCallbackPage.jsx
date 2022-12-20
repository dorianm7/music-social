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
    const accessToken = searchParams.get('access_token');
    const fromPath = searchParams.get('fromPath');
    localStorage.setItem('spotify_access_token', accessToken);
    navigate(fromPath);
  }, []);
  return <></>;
}

export default SpotifyAuthorizeCallbackPage;
