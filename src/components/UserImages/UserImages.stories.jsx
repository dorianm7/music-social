/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import UserImages from './UserImages';

export default {
  title: 'Components/UserImages',
  component: UserImages,
};

const Template = (args) => <UserImages {...args} />;

export const Default = Template.bind({});
Default.args = UserImages.defaultProps;
