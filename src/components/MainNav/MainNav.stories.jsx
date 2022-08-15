/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import MainNav from './MainNav';

export default {
  title: 'Components/MainNav',
  component: MainNav,
};

const Template = (args) => <MainNav {...args} />;

export const Default = Template.bind({});
Default.args = MainNav.defaultProps;

export const SignedIn = Template.bind({});
SignedIn.args = {
  ...Default.args,
  userSignedIn: true,
};
