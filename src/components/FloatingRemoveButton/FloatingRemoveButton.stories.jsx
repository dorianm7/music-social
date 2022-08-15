/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import FloatingRemoveButton from './FloatingRemoveButton';

export default {
  title: 'Components/FloatingRemoveButton',
  component: FloatingRemoveButton,
};

const Template = (args) => <FloatingRemoveButton {...args} />;

export const Default = Template.bind({});
Default.args = FloatingRemoveButton.defaultProps;
