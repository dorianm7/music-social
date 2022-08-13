/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import BasicButton from './BasicButton';

export default {
  title: 'Components/Basic/BasicButton',
  component: BasicButton,
};

const Template = (args) => <BasicButton {...args} />;

export const Default = Template.bind({});
Default.args = BasicButton.defaultProps;
Default.args.children = 'Text Child';

export const Outlined = Template.bind({});
Outlined.args = {
  ...Default.args,
  hasOutline: true,
};
