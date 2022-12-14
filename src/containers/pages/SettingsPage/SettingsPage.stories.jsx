/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SettingsPage from './SettingsPage';
import AppNav from '../../../components/AppNav/AppNav';
import SettingsPageContents from '../../page-contents/SettingsPageContents/SettingsPageContents';
import Footer from '../../../components/Footer/Footer';

export default {
  title: 'Containers/Pages/SettingsPage',
  component: SettingsPage,
  subcomponents: {
    AppNav,
    SettingsPageContents,
    Footer,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <SettingsPage {...args} />;

export const Default = Template.bind({});
Default.args = SettingsPage.defaultProps;
