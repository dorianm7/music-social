/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = Select.defaultProps;
