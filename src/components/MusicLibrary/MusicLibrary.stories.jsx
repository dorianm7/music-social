/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import MusicLibrary from './MusicLibrary';

import BasicPlaylist from '../BasicPlaylist/BasicPlaylist';
import ListSearch from '../ListSearch/ListSearch';

export default {
  title: 'Components/MusicLibrary',
  component: MusicLibrary,
  subcomponents: {
    BasicPlaylist,
    ListSearch,
  },
};

const Template = (args) => (
  <MusicLibrary {...args}>
    <BasicPlaylist />
    <BasicPlaylist />
  </MusicLibrary>
);

export const Default = Template.bind({});
Default.args = MusicLibrary.defaultProps;
