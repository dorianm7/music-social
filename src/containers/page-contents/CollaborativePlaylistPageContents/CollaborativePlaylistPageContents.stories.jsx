/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import CollaborativePlaylistPageContents from './CollaborativePlaylistPageContents';

import BasicPlaylist from '../../../components/BasicPlaylist/BasicPlaylist';
import PlaylistHeader from '../../../components/PlaylistHeader/PlaylistHeader';
import UserImages from '../../../components/UserImages/UserImages';

export default {
  title: 'Containers/PageContents/CollaborativePlaylistPageContents',
  component: CollaborativePlaylistPageContents,
  subcomponents: {
    BasicPlaylist,
    PlaylistHeader,
    UserImages,
  },
  argTypes: {
    playlistHeadingType: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <CollaborativePlaylistPageContents {...args} />;

export const Default = Template.bind({});
Default.args = CollaborativePlaylistPageContents.defaultProps;
