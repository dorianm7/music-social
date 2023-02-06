/**
 * Module containing functions to help with Spotify App functions
 * @module spotify-helpers
 */

/**
 * Formats Spotify album object for backend use
 * @param {Object} album Spotify album object
 */
const formatAlbum = (album) => ({
  spotify_api_href: album.href,
  spotify_href: album.external_urls.spotify,
  spotify_id: album.id,
  img: album.images[1].url,
  name: album.name,
  artists: album.artists.map((artist) => artist.name),
});

/**
 * Formats Spotify artist object for backend use
 * @param {Object} artist Spotify artist object
 */
const formatArtist = (artist) => {
  const res = {
    spotify_api_href: artist.href,
    spotify_href: artist.external_urls.spotify,
    spotify_id: artist.id,
    name: artist.name,
  };

  if (artist.images.length === 0) {
    res.img = '';
  } else if (artist.images.length === 1) {
    res.img = artist.images[0].url;
  } else {
    res.img = artist.images[1].url;
  }

  return res;
};

/**
 * Formats Spotify playlist object for backend use
 * @param {Object} playlist Spotify playlist object
 */
const formatPlaylist = (playlist) => {
  const res = {
    spotify_api_href: playlist.href,
    spotify_href: playlist.external_urls.spotify,
    spotify_id: playlist.id,
    name: playlist.name,
    creators: [playlist.owner.display_name],
  };

  if (playlist.images.length === 0) {
    res.img = '';
  } else if (playlist.images.length === 1) {
    res.img = playlist.images[0].url;
  } else {
    res.img = playlist.images[1].url;
  }

  return res;
};

export {
  formatAlbum,
  formatArtist,
  formatPlaylist,
};
