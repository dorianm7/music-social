/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import AppNav from './AppNav';

import IconButton from '../basic/IconButton/IconButton';
import IndicatorIcon from '../IndicatorIcon/IndicatorIcon';

export default {
  title: 'Components/AppNav',
  component: AppNav,
  subcomponents: {
    IconButton,
    IndicatorIcon,
  },
};

const Template = (args) => <AppNav {...args} />;

export const Default = Template.bind({});
Default.args = AppNav.defaultProps;

export const HasNotification = Template.bind({});
HasNotification.args = {
  ...Default.args,
  notificationsIndicatorOn: true,
};
