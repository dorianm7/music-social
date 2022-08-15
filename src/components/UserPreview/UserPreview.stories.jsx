/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import UserPreview from './UserPreview';

export default {
  title: 'Components/UserPreview',
  component: UserPreview,
};

const Template = (args) => <UserPreview {...args} />;

export const Default = Template.bind({});
Default.args = UserPreview.defaultProps;

export const Following = Template.bind({});
Following.args = {
  ...Default.args,
  isFollowing: true,
};
