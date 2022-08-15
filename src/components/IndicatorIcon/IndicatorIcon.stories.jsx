/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import IndicatorIcon from './IndicatorIcon';

import { IconNames } from '../../Icons';

export default {
  title: 'Components/IdicatorIcon',
  component: IndicatorIcon,
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

const Template = (args) => <IndicatorIcon {...args} />;

export const Default = Template.bind({});
Default.args = IndicatorIcon.defaultProps;

export const On = Template.bind({});
On.args = {
  ...Default.args,
  on: true,
};

export const Square = Template.bind({});
Square.args = {
  ...Default.arg,
  rounded: 'none',
};
