/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import LibraryInfo from './LibraryInfo';

export default {
  title: 'Components/LibraryInfo',
  component: LibraryInfo,
  argTypes: {
    albumsTotal: {
      control: { type: 'number' },
    },
    artistsTotal: {
      control: { type: 'number' },
    },
    playlistsTotal: {
      control: { type: 'number' },
    },
  },
};

const Template = (args) => <LibraryInfo {...args} />;

export const Default = Template.bind({});
Default.args = LibraryInfo.defaultProps;
