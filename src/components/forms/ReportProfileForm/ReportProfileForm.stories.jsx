/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ReportProfileForm from './ReportProfileForm';

export default {
  title: 'Components/ReportProfileForm',
  component: ReportProfileForm,
};

const Template = (args) => <ReportProfileForm {...args} />;

export const Default = Template.bind({});
Default.args = ReportProfileForm.defaultProps;
