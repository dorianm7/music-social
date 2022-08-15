/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SignInForm from './SignInForm';

export default {
  title: 'Components/Forms/SignInForm',
  component: SignInForm,
};

const Template = (args) => <SignInForm {...args} />;

export const Default = Template.bind({});
Default.args = SignInForm.defaultProps;
