import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import '../stylesheets/BasicPlaylist.css';

import ExpandableButton from './basic/ExpandableButton';
import Select from './Select';
import MusicItem from './MusicItem';
import { VERTICAL_DOTS_NAME } from '../Icons';
import ListSearch from './ListSearch';

// Returns a string of all the artist names in the artists array
function getArtistString(artists) {
  const artistNames = [];
  artists.forEach((artistObj) => {
    artistNames.push(artistObj.name);
  });

  return artistNames.toString();
}

// Returns a string containing all the searchable values of the item
function getSearchableString(item) {
  return `${item.track.name}\
    ${getArtistString(item.track.artists)}\
    ${item.track.album.name}\
    ${item.track.album.release_date}`.toLowerCase();
}

// Renders a MusicItem containing all of the parameters listed
function renderMusicItem(
  imgSrc,
  creator,
  title,
  options,
  optionsOnClicks,
) {
  return (
    <MusicItem
      imgSrc={imgSrc}
      imgAlt={`${creator} ${title} cover art`}
      creator={creator}
      title={title}
      rightComponent={(
        <ExpandableButton
          options={options}
          optionsOnClicks={optionsOnClicks}
          expand="left"
          direction="down"
          initialIcon={VERTICAL_DOTS_NAME}
          initialIconTransparent
        />
      )}
    />
  );
}

// Given the musicItems object, returns those including both search strings
// as a list of list items
function renderListItems(musicItems, searchString1, searchString2) {
  const listItems = [];
  for (let i = 0; i < musicItems.length; i += 1) {
    const searchableString = getSearchableString(musicItems[i]);
    if (searchableString.includes(searchString1.toLowerCase())
      && searchableString.includes(searchString2.toLowerCase())) {
      listItems.push(
        <li key={nanoid()}>
          {renderMusicItem(
            musicItems[i].track.album.images[1].url,
            getArtistString(musicItems[i].track.artists),
            musicItems[i].track.name,
            ['Spotify Link'],
            [() => { window.open(musicItems[i].track.external_urls.spotify, '_blank'); }],
          )}
        </li>,
      );
    }
  }

  return listItems;
}

function BasicPlaylist(props) {
  const {
    playlistHeader,
    items,
    selectOptions,
    onSelectOptionClick,
    searchVal,
    showSearch,
  } = props;
  const [searchString, setSearchString] = useState('');

  return (
    <>
      <div className="basic-playlist">
        <div className="heading">
          {playlistHeader}
          <Select
            options={selectOptions}
            optionOnClick={(string) => onSelectOptionClick(string)}
          />
          {showSearch && <ListSearch onInputChange={setSearchString} />}
        </div>
        <ul className="list">
          {renderListItems(items, searchString, searchVal)}
        </ul>
      </div>
    </>
  );
}

BasicPlaylist.propTypes = {
  playlistHeader: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.object),
  selectOptions: PropTypes.arrayOf(PropTypes.string),
  onSelectOptionClick: PropTypes.func,
  searchVal: PropTypes.string,
  showSearch: PropTypes.bool,
};

BasicPlaylist.defaultProps = {
  playlistHeader: <h2>Playlist</h2>,
  selectOptions: ['Recent', 'Latest'],
  onSelectOptionClick: (option) => { console.log(`${option} clicked`); },
  searchVal: '',
  showSearch: false,
  // Default items holds 2 tracks
  items:
  [
    {
      added_at: '2020-10-19T08:28:40Z',
      added_by: {
        external_urls: {
          spotify: 'https://open.spotify.com/user/moriand',
        },
        href: 'https://api.spotify.com/v1/users/moriand',
        id: 'moriand',
        type: 'user',
        uri: 'spotify:user:moriand',
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/4T1sY4aibm24hxfz9JnI7c',
              },
              href: 'https://api.spotify.com/v1/artists/4T1sY4aibm24hxfz9JnI7c',
              id: '4T1sY4aibm24hxfz9JnI7c',
              name: 'DJ Taye',
              type: 'artist',
              uri: 'spotify:artist:4T1sY4aibm24hxfz9JnI7c',
            },
          ],
          available_markets: [
            'AG',
            'AR',
            'AU',
            'BB',
            'BN',
            'BO',
            'BR',
            'BS',
            'BT',
            'BZ',
            'CA',
            'CL',
            'CO',
            'CR',
            'CW',
            'DM',
            'DO',
            'EC',
            'GD',
            'GT',
            'GY',
            'HK',
            'HN',
            'HT',
            'ID',
            'JM',
            'KH',
            'KN',
            'KR',
            'LA',
            'LC',
            'MO',
            'MX',
            'MY',
            'NI',
            'NZ',
            'PA',
            'PE',
            'PH',
            'PY',
            'SG',
            'SR',
            'SV',
            'TH',
            'TT',
            'TW',
            'US',
            'UY',
            'VC',
            'VE',
            'VN',
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/1hk2CB4Z5gCyxBtSZfYYB3',
          },
          href: 'https://api.spotify.com/v1/albums/1hk2CB4Z5gCyxBtSZfYYB3',
          id: '1hk2CB4Z5gCyxBtSZfYYB3',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273255d4809d0a2a884ce818f0e',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02255d4809d0a2a884ce818f0e',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851255d4809d0a2a884ce818f0e',
              width: 64,
            },
          ],
          name: 'Break It Down EP',
          release_date: '2015-10-16',
          release_date_precision: 'day',
          total_tracks: 4,
          type: 'album',
          uri: 'spotify:album:1hk2CB4Z5gCyxBtSZfYYB3',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4T1sY4aibm24hxfz9JnI7c',
            },
            href: 'https://api.spotify.com/v1/artists/4T1sY4aibm24hxfz9JnI7c',
            id: '4T1sY4aibm24hxfz9JnI7c',
            name: 'DJ Taye',
            type: 'artist',
            uri: 'spotify:artist:4T1sY4aibm24hxfz9JnI7c',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4hH4fEXPg3qpTDlmdNOO01',
            },
            href: 'https://api.spotify.com/v1/artists/4hH4fEXPg3qpTDlmdNOO01',
            id: '4hH4fEXPg3qpTDlmdNOO01',
            name: 'DJ Paypal',
            type: 'artist',
            uri: 'spotify:artist:4hH4fEXPg3qpTDlmdNOO01',
          },
        ],
        available_markets: [
          'AG',
          'AR',
          'AU',
          'BB',
          'BN',
          'BO',
          'BR',
          'BS',
          'BT',
          'BZ',
          'CA',
          'CL',
          'CO',
          'CR',
          'CW',
          'DM',
          'DO',
          'EC',
          'GD',
          'GT',
          'GY',
          'HK',
          'HN',
          'HT',
          'ID',
          'JM',
          'KH',
          'KN',
          'KR',
          'LA',
          'LC',
          'MO',
          'MX',
          'MY',
          'NI',
          'NZ',
          'PA',
          'PE',
          'PH',
          'PY',
          'SG',
          'SR',
          'SV',
          'TH',
          'TT',
          'TW',
          'US',
          'UY',
          'VC',
          'VE',
          'VN',
        ],
        disc_number: 1,
        duration_ms: 270897,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'GBLZC1500043',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/1elb8D50eWLGJrr9M8nU2w',
        },
        href: 'https://api.spotify.com/v1/tracks/1elb8D50eWLGJrr9M8nU2w',
        id: '1elb8D50eWLGJrr9M8nU2w',
        is_local: false,
        name: 'Go Away (feat. DJ Paypal)',
        popularity: 2,
        preview_url: 'https://p.scdn.co/mp3-preview/654171555450fbd3ddb91ecb91fd7de20a1d73a5?cid=774b29d4f13844c495f206cafdad9c86',
        track: true,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:1elb8D50eWLGJrr9M8nU2w',
      },
      video_thumbnail: {
        url: null,
      },
    },
    {
      added_at: '2020-10-19T08:29:59Z',
      added_by: {
        external_urls: {
          spotify: 'https://open.spotify.com/user/moriand',
        },
        href: 'https://api.spotify.com/v1/users/moriand',
        id: 'moriand',
        type: 'user',
        uri: 'spotify:user:moriand',
      },
      is_local: false,
      primary_color: null,
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/4T1sY4aibm24hxfz9JnI7c',
              },
              href: 'https://api.spotify.com/v1/artists/4T1sY4aibm24hxfz9JnI7c',
              id: '4T1sY4aibm24hxfz9JnI7c',
              name: 'DJ Taye',
              type: 'artist',
              uri: 'spotify:artist:4T1sY4aibm24hxfz9JnI7c',
            },
          ],
          available_markets: [
            'AG',
            'AR',
            'AU',
            'BB',
            'BN',
            'BO',
            'BR',
            'BS',
            'BT',
            'BZ',
            'CA',
            'CL',
            'CO',
            'CR',
            'CW',
            'DM',
            'DO',
            'EC',
            'GD',
            'GT',
            'GY',
            'HK',
            'HN',
            'HT',
            'ID',
            'JM',
            'KH',
            'KN',
            'KR',
            'LA',
            'LC',
            'MO',
            'MX',
            'MY',
            'NI',
            'NZ',
            'PA',
            'PE',
            'PH',
            'PY',
            'SG',
            'SR',
            'SV',
            'TH',
            'TT',
            'TW',
            'US',
            'UY',
            'VC',
            'VE',
            'VN',
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/1hk2CB4Z5gCyxBtSZfYYB3',
          },
          href: 'https://api.spotify.com/v1/albums/1hk2CB4Z5gCyxBtSZfYYB3',
          id: '1hk2CB4Z5gCyxBtSZfYYB3',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273255d4809d0a2a884ce818f0e',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02255d4809d0a2a884ce818f0e',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851255d4809d0a2a884ce818f0e',
              width: 64,
            },
          ],
          name: 'Break It Down EP',
          release_date: '2015-10-16',
          release_date_precision: 'day',
          total_tracks: 4,
          type: 'album',
          uri: 'spotify:album:1hk2CB4Z5gCyxBtSZfYYB3',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4T1sY4aibm24hxfz9JnI7c',
            },
            href: 'https://api.spotify.com/v1/artists/4T1sY4aibm24hxfz9JnI7c',
            id: '4T1sY4aibm24hxfz9JnI7c',
            name: 'DJ Taye',
            type: 'artist',
            uri: 'spotify:artist:4T1sY4aibm24hxfz9JnI7c',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/47UATnEOiiEMa2OFvZjv6i',
            },
            href: 'https://api.spotify.com/v1/artists/47UATnEOiiEMa2OFvZjv6i',
            id: '47UATnEOiiEMa2OFvZjv6i',
            name: 'Tripletrain',
            type: 'artist',
            uri: 'spotify:artist:47UATnEOiiEMa2OFvZjv6i',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5whJkWAzwCYfeetVpUJKn7',
            },
            href: 'https://api.spotify.com/v1/artists/5whJkWAzwCYfeetVpUJKn7',
            id: '5whJkWAzwCYfeetVpUJKn7',
            name: 'DJ Manny',
            type: 'artist',
            uri: 'spotify:artist:5whJkWAzwCYfeetVpUJKn7',
          },
        ],
        available_markets: [
          'AG',
          'AR',
          'AU',
          'BB',
          'BN',
          'BO',
          'BR',
          'BS',
          'BT',
          'BZ',
          'CA',
          'CL',
          'CO',
          'CR',
          'CW',
          'DM',
          'DO',
          'EC',
          'GD',
          'GT',
          'GY',
          'HK',
          'HN',
          'HT',
          'ID',
          'JM',
          'KH',
          'KN',
          'KR',
          'LA',
          'LC',
          'MO',
          'MX',
          'MY',
          'NI',
          'NZ',
          'PA',
          'PE',
          'PH',
          'PY',
          'SG',
          'SR',
          'SV',
          'TH',
          'TT',
          'TW',
          'US',
          'UY',
          'VC',
          'VE',
          'VN',
        ],
        disc_number: 1,
        duration_ms: 264334,
        episode: false,
        explicit: false,
        external_ids: {
          isrc: 'GBLZC1500044',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/6JhIAErBNmOAa2kfYfhHLF',
        },
        href: 'https://api.spotify.com/v1/tracks/6JhIAErBNmOAa2kfYfhHLF',
        id: '6JhIAErBNmOAa2kfYfhHLF',
        is_local: false,
        name: 'That Love (feat. Tripletrain & DJ Manny)',
        popularity: 1,
        preview_url: 'https://p.scdn.co/mp3-preview/d0f5a91271f4118eb04e18b97590e1a3d7fdb930?cid=774b29d4f13844c495f206cafdad9c86',
        track: true,
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:6JhIAErBNmOAa2kfYfhHLF',
      },
      video_thumbnail: {
        url: null,
      },
    },
  ],
};

export default BasicPlaylist;
