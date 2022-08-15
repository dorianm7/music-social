/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ConfirmEmailModalContents from './ConfirmEmailModalContents';

export default {
  title: 'Components/ModalContents/ConfirmEmailModalContents ',
  component: ConfirmEmailModalContents,
};

const Template = (args) => <ConfirmEmailModalContents {...args} />;

export const Default = Template.bind({});
Default.args = ConfirmEmailModalContents.defaultProps;
