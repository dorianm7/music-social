/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Tabs from './Tabs';

export default {
  title: 'Components/Subcomponents/Tabs',
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = Tabs.defaultProps;
