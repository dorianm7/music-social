/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Modal from './Modal';

export default {
  title: 'Components/Modals/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = Modal.defaultProps;
