/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Toast from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
};

const Template = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = Toast.defaultProps;
