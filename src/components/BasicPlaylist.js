import React from 'react';

import { nanoid } from 'nanoid';

import '../stylesheets/BasicPlaylist.css';

import ExpandableButton from './basic/ExpandableButton';
import Select from './Select';
import MusicItem from './MusicItem';
import { VERTICAL_DOTS_NAME } from '../Icons';
import ListSearch from './ListSearch';

// musicItem is and object of form:
// {
//    imgSrc: URL to cover art
//    creator: Creator of Music Item
//    title: Music Item title
//    options: An array of options for options button
// }
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

// musicItems is an array of objects
function renderListItems(musicItems) {
  const listItems = [];
  for (let i = 0; i < musicItems.length; i += 1) {
    listItems.push(
      <li key={nanoid()}>
        {renderMusicItem(
          musicItems[i].imgSrc,
          musicItems[i].creator,
          musicItems[i].title,
          musicItems[i].options,
          musicItems[i].optionsOnClicks,
        )}
      </li>,
    );
  }

  return listItems;
}

function BasicPlaylist(props) {
  console.log(props);
  const playlistHeader = <h2>Playlist</h2>;
  // const { musicItems } = props
  const musicItems = [];
  const options = [
    'Option 1',
    'Option 2',
  ];
  const optionsOnClicks = [
    () => console.log('New option 1 click'),
    () => console.log('New option 2 clicked'),
  ];
  const musicItem = {
    imgSrc: 'https://f4.bcbits.com/img/a2067063391_16.jpg',
    creator: 'U2',
    title: 'Song',
    options,
    optionsOnClicks,
  };
  for (let i = 0; i < 8; i += 1) {
    musicItems.push(musicItem);
  }
  const showSearch = true;

  return (
    <>
      <div className="basic-playlist">
        <div className="heading">
          {playlistHeader}
          <Select
            options={['Recent']}
            optionOnClick={(string) => console.log(string)}
          />
          {showSearch && <ListSearch />}
        </div>
        <ul className="list">
          {renderListItems(musicItems)}
        </ul>
      </div>
    </>
  );
}

export default BasicPlaylist;
