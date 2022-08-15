/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import CompareLibraryPageContents from './CompareLibraryPageContents';

import BasicPlaylist from '../../../components/BasicPlaylist/BasicPlaylist';
import Comparison from '../../../components/Comparison/Comparison';
import MusicLibrary from '../../../components/MusicLibrary/MusicLibrary';
import PlaylistHeader from '../../../components/PlaylistHeader/PlaylistHeader';

export default {
  title: 'Containers/PageContents/CompareLibraryPageContents',
  component: CompareLibraryPageContents,
  subcomponents: {
    BasicPlaylist,
    Comparison,
    MusicLibrary,
    PlaylistHeader,
  },
  argTypes: {
    artistPercent: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    albumPercent: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    playlistPercent: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
};

const Template = (args) => <CompareLibraryPageContents {...args} />;

export const Default = Template.bind({});
Default.args = CompareLibraryPageContents.defaultProps;
