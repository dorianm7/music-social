/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import AnchorButton from './AnchorButton';

export default {
  title: 'Components/Basic/AnchorButton',
  component: AnchorButton,
};

const Template = (args) => <AnchorButton {...args} />;

export const Default = Template.bind({});
Default.args = AnchorButton.defaultProps;

export const Outlined = Template.bind({});
Outlined.args = {
  ...Default.args,
  hasOutline: true,
};
