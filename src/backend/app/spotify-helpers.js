/**
 * Module containing functions to help with Spotify App functions
 * @module spotify-helpers
 */
/**
 * @typedef {import('../spotify/spotify').SpotifyAlbum} SpotifyAlbum
 * @typedef {import('../spotify/spotify').SpotifyArtist} SpotifyArtist
 * @typedef {import('../spotify/spotify').CurrentUserSpotifyPlaylistListItem}
 * CurrentUserSpotifyPlaylistListItem
 * @typedef {import('../spotify/spotify').SpotifyAlbumListItem} SpotifyAlbumListItem
 * @typedef {import('../users_spotify_albums/users_spotify_albums').UsersSpotifyAlbumsItem}
 * UsersSpotifyAlbumsItem
 * @typedef {import('../users_spotify_artists/users_spotify_artists').UsersSpotifyArtistsItem}
 * UsersSpotifyArtistsItem
 * @typedef {import('../users_spotify_playlists/users_spotify_playlists').UsersSpotifyPlaylistsItem}
 * UsersSpotifyPlaylistsItem
 */

/**
 * Formats Spotify album object for backend use
 * @param {SpotifyAlbum} album Spotify album object
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
 * Format albums into form used in backend
 * @param {SpotifyAlbumListItem[]} albums Albums from a Spotify list
 * @returns {UsersSpotifyAlbumsItem[]} List of formatted albums
 */
const formatAlbums = (albums) => albums.map((item) => formatAlbum(item.album));

/**
 * Formats Spotify artist object for backend use
 * @param {SpotifyArtist} artist Spotify artist object
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
 * Format artists into form used in backend
 * @param {SpotifyArtist[]} artists List of SpotifyArtists
 * @returns {UsersSpotifyArtistsItem[]} List of formatted artists
 */
const formatArtists = (artists) => artists.map((item) => formatArtist(item));

/**
 * Formats Spotify playlist object for backend use
 * @param {CurrentUserSpotifyPlaylistListItem} playlist Spotify playlist object
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

/**
 * Format playlists into form used in backend
 * @param {CurrentUserSpotifyPlaylistListItem[]} playlists List of current users Spotify playlists
 * @returns  {UsersSpotifyPlaylistsItem} List of formatted user spotify playlists
 */
const formatPlaylists = (playlists) => playlists.map((item) => formatPlaylist(item));

export {
  formatAlbums,
  formatArtists,
  formatPlaylists,
};
