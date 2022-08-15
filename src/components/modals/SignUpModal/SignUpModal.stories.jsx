/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SignUpModal from './SignUpModal';
import SignUpModalContents from '../../modal-contents/SignUpModalContents/SignUpModalContents';

export default {
  title: 'Components/Modals/SignUpModal',
  component: SignUpModal,
  subcomponents: { SignUpModalContents },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <SignUpModal {...args} />;

export const Default = Template.bind({});
Default.args = SignUpModal.defaultProps;
