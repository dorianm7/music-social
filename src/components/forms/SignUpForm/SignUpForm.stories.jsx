/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SignUpForm from './SignUpForm';

export default {
  title: 'Components/Forms/SignUpForm',
  component: SignUpForm,
};

const Template = (args) => <SignUpForm {...args} />;

export const Default = Template.bind({});
Default.args = SignUpForm.defaultProps;
