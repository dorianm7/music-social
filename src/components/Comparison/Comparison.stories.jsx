/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Comparison from './Comparison';

import PercentGauge from '../basic/PercentGauge/PercentGauge';

export default {
  title: 'Components/Comparison',
  component: Comparison,
  subcomponents: {
    PercentGauge,
  },
  argTypes: {
    artistPercent: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    albumPercent: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    playlistPercent: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
};

const Template = (args) => <Comparison {...args} />;

export const Default = Template.bind({});
Default.args = Comparison.defaultProps;
