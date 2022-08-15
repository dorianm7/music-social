/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import InputRequirements from '../subcomponents/InputRequirements/InputRequirements';
import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  subcomponents: { InputRequirements },
  argTypes: {
    type: {
      options: [
        'text',
        'password',
        'email',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = TextInput.defaultProps;
