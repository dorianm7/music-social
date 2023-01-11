/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  EmailAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';

import SignInModalContents from './SignInModalContents';
import SignInForm from '../../forms/SignInForm/SignInForm';

export default {
  title: 'Components/ModalContents/SignInModalContents',
  component: SignInModalContents,
  argTypes: {
    providerId: {
      options: [
        EmailAuthProvider.PROVIDER_ID,
        GoogleAuthProvider.PROVIDER_ID,
      ],
      control: { type: 'select' },
    },
  },
  subcomponents: { SignInForm },
};

const Template = (args) => <SignInModalContents {...args} />;

export const Default = Template.bind({});
Default.args = SignInModalContents.defaultProps;

export const EmailResignIn = Template.bind({});
EmailResignIn.args = {
  ...Default.args,
  providerId: EmailAuthProvider.PROVIDER_ID,
  resigningIn: true,
};

export const GoogleResignIn = Template.bind({});
GoogleResignIn.args = {
  ...Default.args,
  providerId: GoogleAuthProvider.PROVIDER_ID,
  resigningIn: true,
};
