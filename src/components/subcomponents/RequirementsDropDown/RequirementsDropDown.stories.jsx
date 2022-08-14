/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import DropDown from '../../DropDown/DropDown';
import { RequirementsDropDown } from './RequirementsDropDown';

export default {
  title: 'Components/Subcomponents/RequirementsDropDown',
  component: RequirementsDropDown,
  subcomponents: { DropDown },
};

const Template = (args) => <RequirementsDropDown {...args} />;

export const Default = Template.bind({});
Default.args = RequirementsDropDown.defaultProps;

export const Open = Template.bind({});
Open.args = {
  ...Default.args,
  open: true,
};

export const CloseHasOpened = Template.bind({});
CloseHasOpened.args = {
  ...Default.args,
  hasOpened: true,
};
