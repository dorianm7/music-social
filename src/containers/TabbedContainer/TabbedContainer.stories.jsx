/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import TabbedContainer from './TabbedContainer';

import Tabs from '../../components/subcomponents/Tabs/Tabs';

export default {
  title: 'Containers/TabbedContainer',
  component: TabbedContainer,
  subcomponents: { Tabs },
};

const Template = (args) => <TabbedContainer {...args} />;

export const Default = Template.bind({});
Default.args = TabbedContainer.defaultProps;
