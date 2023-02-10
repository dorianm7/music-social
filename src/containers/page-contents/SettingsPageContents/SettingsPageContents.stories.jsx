/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import {
  UserContext,
  MockEmailPasswordUser,
} from '../../../contexts/UserContext';

import SettingsPageContents from './SettingsPageContents';
import BasicButton from '../../../components/basic/BasicButton/BasicButton';

const decorator = (user, Story) => (
  <MemoryRouter>
    <UserContext.Provider value={user}>
      <Story />
    </UserContext.Provider>
  </MemoryRouter>
);

export default {
  title: 'Containers/PageContents/SettingsPageContents',
  component: SettingsPageContents,
  decorators: [
    (Story) => decorator(MockEmailPasswordUser, Story),
  ],
  subcomponents: {
    BasicButton,
  },
};

const Template = (args) => <SettingsPageContents {...args} />;

export const Default = Template.bind({});
Default.args = SettingsPageContents.defaultProps;
