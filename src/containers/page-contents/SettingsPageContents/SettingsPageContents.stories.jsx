/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SettingsPageContents from './SettingsPageContents';

export default {
  title: 'Containers/PageContents/SettingsPageContents',
  subcomponents: {
    // nothing atm
  },
  argTypes: {
    // nothing atm
  },
};

const Template = (args) => <SettingsPageContents {...args} />;

export const Default = Template.bind({});
Default.args = SettingsPageContents.defaultProps;
