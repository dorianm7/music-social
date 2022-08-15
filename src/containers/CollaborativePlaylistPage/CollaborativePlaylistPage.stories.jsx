/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import CollaborativePlaylistPage from './CollaborativePlaylistPage';

export default {
  title: 'Containers/CollaborativePlaylistPage',
  component: CollaborativePlaylistPage,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <CollaborativePlaylistPage {...args} />;

export const Default = Template.bind({});
Default.args = CollaborativePlaylistPage.defaultProps;
