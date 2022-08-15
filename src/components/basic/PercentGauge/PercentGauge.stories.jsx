/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import PercentGauge from './PercentGauge';

import defaultImg from '../../../images/help-rhombus-outline.svg';

export default {
  title: 'Components/Basic/PercentGauge',
  component: PercentGauge,
  argTypes: {
    innerCircleColor: { control: 'color' },
    emptyGaugeColor: { control: 'color' },
    filledGaugeColor: { control: 'color' },
    textColor: { control: 'color' },
    percentFilled: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
};

const Template = (args) => <PercentGauge {...args} />;

export const Default = Template.bind({});
Default.args = PercentGauge.defaultProps;

export const Text = Template.bind({});
Text.args = {
  ...Default.args,
  text: 'Text',
};

export const Image = Template.bind({});
Image.args = {
  ...Default.args,
  imageSrc: defaultImg,
  imageAlt: 'Default Icon',
};

export const Color = Template.bind({});
Color.args = {
  ...Default.args,
  innerCircleColor: 'rgb(0, 0, 250)',
  emptyGaugeColor: 'rgb(0, 250, 0)',
  filledGaugeColor: 'rgb(250, 0, 0)',
  textColor: 'rgb(0, 250, 250)',
  text: 'Color',
};
