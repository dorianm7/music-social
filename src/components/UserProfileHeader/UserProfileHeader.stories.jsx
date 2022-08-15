/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import UserProfileHeader from './UserProfileHeader';
import BasicButton from '../basic/BasicButton/BasicButton';
import ToggleIconButton from '../basic/ToggleIconButton/ToggleIconButton';
import UserProfileOptions from '../UserProfileOptions/UserProfileOptions';

export default {
  title: 'Components/UserProfileHeader',
  component: UserProfileHeader,
  subcomponents: {
    BasicButton,
    ToggleIconButton,
    UserProfileOptions,
  },
};

const Template = (args) => <UserProfileHeader {...args} />;

export const Default = Template.bind({});
Default.args = UserProfileHeader.defaultProps;
