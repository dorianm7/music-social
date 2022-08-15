/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import UserProfileOptions from './UserProfileOptions';
import ExpandableButton from '../basic/ExpandableButton/ExpandableButton';

export default {
  title: 'Components/Subcomponents/UserProfileOptions',
  component: UserProfileOptions,
  subcomponents: { ExpandableButton },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <UserProfileOptions {...args} />;

export const Default = Template.bind({});
Default.args = UserProfileOptions.defaultProps;
