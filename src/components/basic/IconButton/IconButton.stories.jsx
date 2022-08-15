/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import IconButton from './IconButton';

import { IconNames } from '../../../Icons';

export default {
  title: 'Components/Basic/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      options: Object.values(IconNames),
      control: { type: 'select' },
    },
    rounded: {
      options: [
        'none',
        'all',
        'top',
        'right',
        'bottom',
        'left',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = IconButton.defaultProps;

export const Outlined = Template.bind({});
Outlined.args = {
  ...Default.args,
  hasOutline: true,
};

export const Transparent = Template.bind({});
Transparent.args = {
  ...Default.args,
  transparentBackground: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  ...Default.args,
  rounded: 'all',
};
