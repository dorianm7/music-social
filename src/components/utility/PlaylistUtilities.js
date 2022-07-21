import React from 'react';

import stc from 'string-to-color';
import { nanoid } from 'nanoid';

import MusicItem from '../MusicItem/MusicItem';
import { VERTICAL_DOTS_NAME } from '../../Icons';
import ExpandableButton from '../basic/ExpandableButton/ExpandableButton';

// Generic playlist items render
// Takes getSearchableString which creates a searchable string
//   from the items
// Takes renderItem which renders an item
// searchString1, searchString2 are used to limit items containing
//  only searchString1 & searchString2
// items the list of items used to turn into List Items
function renderPlaylistItems(
  getSearchableString,
  renderItem,
  searchString1,
  searchString2,
  items,
) {
  const listItems = [];
  for (let i = 0; i < items.length; i += 1) {
    const searchableString = getSearchableString(items[i]);
    if (searchableString.includes(searchString1.toLowerCase())
      && searchableString.includes(searchString2.toLowerCase())) {
      listItems.push(renderItem(items[i]));
    }
  }

  return listItems;
}

// Returns a string of all artists names in the item
function getTrackPlaylistArtistString(item) {
  const artistNames = [];
  item.track.artists.forEach((artist) => {
    artistNames.push(artist.name);
  });

  return artistNames.toString();
}

// Return lowercase string containing all searchable values of item
function getTrackSearchableString(item) {
  return `${item.track.name}\
    ${getTrackPlaylistArtistString(item)}\
    ${item.track.album.name}\
    ${item.track.album.release_date}`.toLowerCase();
}

// Renders a MusicItem for a TrackPlaylist item
function renderTrackPlaylistMusicItem(item) {
  const creator = getTrackPlaylistArtistString(item);
  const title = item.track.name;

  return (
    <MusicItem
      key={nanoid()}
      type="track"
      labelColor="none"
      imgSrc={item.track.album.images[1].url}
      imgAlt={`${creator} ${title} cover art`}
      creator={creator}
      title={title}
      rightComponent={(
        <ExpandableButton
          options={['Spotify Link']}
          optionsOnClicks={[() => { window.open(item.track.external_urls.spotify); }]}
          expand="left"
          direction="down"
          initialIcon={VERTICAL_DOTS_NAME}
          initialIconTransparent
        />
      )}
    />
  );
}

// Return ListItems for the given TrackPlaylist object
function basicTrackPlaylistToListItems(
  searchString1,
  searchString2,
  playlist,
) {
  return renderPlaylistItems(
    getTrackSearchableString,
    renderTrackPlaylistMusicItem,
    searchString1,
    searchString2,
    playlist.items,
  );
}

// Render Track MusicItem for a CollaborativePlaylist item
function renderTrackCollaborativePlaylistMusicItem(item) {
  const creator = getTrackPlaylistArtistString(item);
  const title = item.track.name;

  return (
    <MusicItem
      key={nanoid()}
      type="track"
      labelColor={stc(item.added_by.id)}
      imgSrc={item.track.album.images[1].url}
      imgAlt={`${creator} ${title} cover art`}
      creator={creator}
      title={title}
      rightComponent={(
        <ExpandableButton
          options={['Spotify Link']}
          optionsOnClicks={[() => { window.open(item.track.external_urls.spotify); }]}
          expand="left"
          direction="down"
          initialIcon={VERTICAL_DOTS_NAME}
          initialIconTransparent
        />
      )}
    />
  );
}

// Return ListItems for the given CollaborativePlaylist object
function basicTrackCollaborativePlaylistToListItems(
  searchString1,
  searchString2,
  playlist,
) {
  return renderPlaylistItems(
    getTrackSearchableString,
    renderTrackCollaborativePlaylistMusicItem,
    searchString1,
    searchString2,
    playlist.items,
  );
}

// Return lowercase string containing all searchable values of item
function getArtistPlaylistItemSearchableString(item) {
  return item.name.toLowerCase();
}

// Render Artist MusicItem for an Artist Playlist item
function renderArtistPlaylistMusicItem(item) {
  return (
    <MusicItem
      key={nanoid()}
      type="artist"
      imgSrc={item.images[1].url}
      imgAlt={`${item.name} artist cover`}
      creator={item.name}
      rightComponent={(
        <ExpandableButton
          options={['Spotify Link']}
          optionsOnClicks={[() => { window.open(item.external_urls.spotify); }]}
          expand="left"
          direction="down"
          initialIcon={VERTICAL_DOTS_NAME}
          initialIconTransparent
        />
      )}
    />
  );
}

// Render ListItems for the given ArtistList Object
function basicArtistPlaylistToListItems(
  searchString1,
  searchString2,
  artistListObj,
) {
  return renderPlaylistItems(
    getArtistPlaylistItemSearchableString,
    renderArtistPlaylistMusicItem,
    searchString1,
    searchString2,
    artistListObj.artists.items,
  );
}

// Returns a string of all artists names in the item
function getAlbumPlaylistArtistString(item) {
  const artistsNames = [];
  item.artists.forEach((artist) => {
    artistsNames.push(artist.name);
  });

  return artistsNames.toString();
}

// Returns lowercase string containing all searchable values of item
function getAlbumPlaylistItemSearchableString(item) {
  return `${getAlbumPlaylistArtistString(item)}\
          ${item.name}`.toLowerCase();
}

// Render Artist MusicItem for an Artist Playlist item
function renderAlbumPlaylistMusicItem(item) {
  return (
    <MusicItem
      key={nanoid()}
      type="album"
      imgSrc={item.images[1].url}
      imgAlt={`${item.name} album cover`}
      creator={getAlbumPlaylistArtistString(item)}
      title={item.name}
      rightComponent={(
        <ExpandableButton
          options={['Spotify Link']}
          optionsOnClicks={[() => { window.open(item.external_urls.spotify); }]}
          expand="left"
          direction="down"
          initialIcon={VERTICAL_DOTS_NAME}
          initialIconTransparent
        />
      )}
    />
  );
}

// Render ListItems for the given AlbumList Object
function basicAlbumPlaylistToListItems(
  searchString1,
  searchString2,
  albumListObj,
) {
  return renderPlaylistItems(
    getAlbumPlaylistItemSearchableString,
    renderAlbumPlaylistMusicItem,
    searchString1,
    searchString2,
    albumListObj.items,
  );
}

// Returns lowercase string containing all searchable values of item
function getPlaylistPlaylistItemSearchableString(item) {
  return `${item.name} ${item.owner.display_name}`.toLowerCase();
}

// Render Playlist MusicItem for a Playlist Playlist item
function renderPlaylistPlaylistMusicItem(item) {
  return (
    <MusicItem
      key={nanoid()}
      type="playlist"
      imgSrc={item.images[1].url}
      imgAlt={`${item.name} playlist cover`}
      creator={item.owner.display_name}
      title={item.name}
      rightComponent={(
        <ExpandableButton
          options={['Spotify Link']}
          optionsOnClicks={[() => { window.open(item.external_urls.spotify); }]}
          expand="left"
          direction="down"
          initialIcon={VERTICAL_DOTS_NAME}
          initialIconTransparent
        />
      )}
    />
  );
}

// Render ListItems for the given PlaylistList object
function basicPlaylistPlaylistToListItems(
  searchString1,
  searchString2,
  playlistListObj,
) {
  return renderPlaylistItems(
    getPlaylistPlaylistItemSearchableString,
    renderPlaylistPlaylistMusicItem,
    searchString1,
    searchString2,
    playlistListObj.items,
  );
}

export {
  basicTrackPlaylistToListItems,
  basicTrackCollaborativePlaylistToListItems,
  basicArtistPlaylistToListItems,
  basicAlbumPlaylistToListItems,
  basicPlaylistPlaylistToListItems,
};
