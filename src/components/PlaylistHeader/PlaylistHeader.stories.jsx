/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import PlaylistHeader from './PlaylistHeader';

export default {
  title: 'Components/PlaylistHeader',
  component: PlaylistHeader,
  argTypes: {
    headingType: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
      ],
      control: 'select',
    },
  },
};

const Template = (args) => <PlaylistHeader {...args} />;

export const Default = Template.bind({});
Default.args = PlaylistHeader.defaultProps;

export const RunningTime = Template.bind({});
RunningTime.args = {
  ...Default.args,
  totalRunningTime: '99900000',
};
