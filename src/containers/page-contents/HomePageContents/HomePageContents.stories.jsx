/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import HomePageContents from './HomePageContents';

export default {
  title: 'Containers/PageContents/HomePageContents',
  component: HomePageContents,
};

const Template = (args) => <HomePageContents {...args} />;

export const Default = Template.bind({});
Default.args = HomePageContents.defaultProps;
