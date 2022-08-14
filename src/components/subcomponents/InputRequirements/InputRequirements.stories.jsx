/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { RequirementsDropDown } from '../RequirementsDropDown/RequirementsDropDown';
import InputRequirements from './InputRequirements';

export default {
  title: 'Components/Subcomponents/InputRequirements',
  component: InputRequirements,
  subcomponents: { RequirementsDropDown },
};

const Template = (args) => <InputRequirements {...args} />;

export const Default = Template.bind({});
Default.args = InputRequirements.defaultProps;
Default.args.showRequirements = true;

export const Open = Template.bind({});
Open.args = {
  ...Default.args,
  openDropDown: true,
};

export const CloseHasOpened = Template.bind({});
CloseHasOpened.args = {
  ...Default.args,
  hasOpened: true,
};
