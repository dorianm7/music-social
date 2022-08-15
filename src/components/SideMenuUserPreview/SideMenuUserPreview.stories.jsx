/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SideMenuUserPreview from './SideMenuUserPreview';

export default {
  title: 'Components/SideMenuUserPreview',
  component: SideMenuUserPreview,
};

const Template = (args) => <SideMenuUserPreview {...args} />;

export const Default = Template.bind({});
Default.args = SideMenuUserPreview.defaultProps;
