/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SideMenu from './SideMenu';

export default {
  title: 'Components/SideMenu',
  component: SideMenu,
};

const Template = (args) => <SideMenu {...args} />;

export const Default = Template.bind({});
Default.args = SideMenu.defaultProps;
