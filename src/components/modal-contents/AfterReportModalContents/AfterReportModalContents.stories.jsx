/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import AfterReportModalContents from './AfterReportModalContents';

export default {
  title: 'Components/ModalContents/AfterReportModalContents ',
  component: AfterReportModalContents,
};

const Template = (args) => <AfterReportModalContents {...args} />;

export const Default = Template.bind({});
Default.args = AfterReportModalContents.defaultProps;
