/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SignInModalContents from './SignInModalContents';
import SignInForm from '../../forms/SignInForm/SignInForm';

export default {
  title: 'Components/ModalContents/SignInModalContents',
  component: SignInModalContents,
  subcomponents: { SignInForm },
};

const Template = (args) => <SignInModalContents {...args} />;

export const Default = Template.bind({});
Default.args = SignInModalContents.defaultProps;
