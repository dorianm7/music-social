/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import IconButton from '../IconButton/IconButton';
import ToggleIconButton from './ToggleIconButton';

import { IconNames } from '../../../Icons';

export default {
  title: 'Components/Basic/ToggleIconButton',
  component: ToggleIconButton,
  subcomponents: { IconButton },
  argTypes: {
    initialIcon: {
      options: Object.values(IconNames),
      control: { type: 'select' },
    },
    subsequentIcon: {
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

const Template = (args) => <ToggleIconButton {...args} />;

export const Default = Template.bind({});
Default.args = ToggleIconButton.defaultProps;
Default.args.rounded = 'none';

export const Toggled = Template.bind({});
Toggled.args = {
  ...Default.args,
  toggle: true,
  subsequentIcon: IconNames.x,
};

export const Transparent = Template.bind({});
Transparent.args = {
  ...Default.args,
  initialTransparent: true,
  subsequentTransparent: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  ...Default.args,
  rounded: 'all',
};
