/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SignInModal from './SignInModal';
import SignInModalContents from '../../modal-contents/SignInModalContents/SignInModalContents';

export default {
  title: 'Components/Modals/SignInModal',
  component: SignInModal,
  subcomponents: { SignInModalContents },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <SignInModal {...args} />;

export const Default = Template.bind({});
Default.args = SignInModal.defaultProps;
Default.args.open = true;
