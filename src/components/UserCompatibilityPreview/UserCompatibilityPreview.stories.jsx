/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import UserCompatibilityPreview from './UserCompatibilityPreview';
import PercentGauge from '../basic/PercentGauge/PercentGauge';

export default {
  title: 'Components/UserCompatibilityPreview',
  component: UserCompatibilityPreview,
  subcomponents: { PercentGauge },
  argTypes: {
    percentCompatible: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
};

const Template = (args) => <UserCompatibilityPreview {...args} />;

export const Default = Template.bind({});
Default.args = UserCompatibilityPreview.defaultProps;
