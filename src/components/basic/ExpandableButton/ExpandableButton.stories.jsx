/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ToggleIconButton from '../ToggleIconButton/ToggleIconButton';
import ExpandableButton from './ExpandableButton';

import { IconNames } from '../../../Icons';

export default {
  title: 'Components/Basic/ExpandableButton',
  component: ExpandableButton,
  subcomponents: { ToggleIconButton },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    initialIcon: {
      options: Object.values(IconNames),
      control: { type: 'select' },
    },
    subsequentIcon: {
      options: Object.values(IconNames),
      control: { type: 'select' },
    },
    expand: {
      options: [
        'none',
        'up',
        'right',
        'down',
        'left',
      ],
      control: { type: 'select' },
    },
    direction: {
      options: [
        'none',
        'up',
        'down',
        'left',
        'right',
      ],
      control: { type: 'select' },
    },
    alignOptionsTitle: {
      options: [
        'left',
        'center',
        'right',
      ],
      control: { type: 'select' },
    },
    alignOptions: {
      options: [
        'left',
        'center',
        'right',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <ExpandableButton {...args} />;

export const Default = Template.bind({});
Default.args = ExpandableButton.defaultProps;

export const OptionsTitle = Template.bind({});
OptionsTitle.args = {
  ...Default.args,
  optionsTitle: 'Options Title',
};
