/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import CollaborativePlaylistPage from './CollaborativePlaylistPage';

import CollaborativePlaylistPageContents from '../page-contents/CollaborativePlaylistPageContents/CollaborativePlaylistPageContents';

export default {
  title: 'Containers/Pages/CollaborativePlaylistPage',
  component: CollaborativePlaylistPage,
  subcomponents: { CollaborativePlaylistPageContents },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <CollaborativePlaylistPage {...args} />;

export const Default = Template.bind({});
Default.args = CollaborativePlaylistPage.defaultProps;
