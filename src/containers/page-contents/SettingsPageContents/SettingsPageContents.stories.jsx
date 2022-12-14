/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SettingsPageContents from './SettingsPageContents';

import BasicButton from '../../../components/basic/BasicButton/BasicButton';

export default {
  title: 'Containers/PageContents/SettingsPageContents',
  subcomponents: {
    BasicButton,
  },
  argTypes: {
    // nothing atm
  },
};

const Template = (args) => <SettingsPageContents {...args} />;

export const Default = Template.bind({});
Default.args = SettingsPageContents.defaultProps;
