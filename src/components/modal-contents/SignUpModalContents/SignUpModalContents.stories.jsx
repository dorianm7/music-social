/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SignUpModalContents from './SignUpModalContents';
import SignUpForm from '../../forms/SignUpForm/SignUpForm';

export default {
  title: 'Components/ModalContents/SignUpModalContents',
  component: SignUpModalContents,
  subcomponents: { SignUpForm },
};

const Template = (args) => <SignUpModalContents {...args} />;

export const Default = Template.bind({});
Default.args = SignUpModalContents.defaultProps;
