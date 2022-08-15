/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import {
  ExpandedOptions,
} from './ExpandedOptions';

export default {
  title: 'Components/Subcomponents/ExpandedOptions',
  component: ExpandedOptions,
  argTypes: {
    alignTitle: {
      options: [
        'none',
        'left',
        'center',
        'right',
      ],
      control: { type: 'select' },
    },
    alignOptions: {
      options: [
        'none',
        'left',
        'center',
        'right',
      ],
      control: { type: 'select' },
    },
    corner: {
      options: [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <ExpandedOptions {...args} />;

export const Default = Template.bind({});
Default.args = ExpandedOptions.defaultProps;

export const Title = Template.bind({});
Title.args = {
  ...Default.args,
  title: 'A Title',
};
