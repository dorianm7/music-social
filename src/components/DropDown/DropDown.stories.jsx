/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import DropDown from './DropDown';

import { IconNames } from '../../Icons';

export default {
  title: 'Components/DropDown',
  component: DropDown,
  argTypes: {
    titleBarIconName: {
      options: IconNames,
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = DropDown.defaultProps;

export const ShowIcon = Template.bind({});
ShowIcon.args = {
  ...Default.args,
  showTitleBarIcon: true,
};

export const Open = Template.bind({});
Open.args = {
  ...Default.args,
  open: true,
};
