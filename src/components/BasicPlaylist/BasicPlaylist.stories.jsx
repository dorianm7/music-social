/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import BasicPlaylist from './BasicPlaylist';

import ListSearch from '../ListSearch/ListSearch';
import Select from '../Select/Select';

export default {
  title: 'Components/BasicPlaylist',
  component: BasicPlaylist,
  subcomponents: {
    ListSearch,
    Select,
  },
  argTypes: {
    type: {
      options: [
        'album',
        'artist',
        'collaborative',
        'playlist',
        'track',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <BasicPlaylist {...args} />;

export const Default = Template.bind({});
Default.args = BasicPlaylist.defaultProps;

export const ShowSearch = Template.bind({});
ShowSearch.args = {
  ...Default.args,
  showSearch: true,
};
