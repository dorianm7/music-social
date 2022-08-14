/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import IconButton from '../basic/IconButton/IconButton';
import DividerAddButton from './DividerAddButton';

export default {
  title: 'Components/DividerAddButton',
  component: DividerAddButton,
  subcomponents: { IconButton },
};

const Template = (args) => <DividerAddButton {...args} />;

export const Default = Template.bind({});
Default.args = DividerAddButton.defaultProps;
