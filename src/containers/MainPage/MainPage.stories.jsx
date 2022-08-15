/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import MainPage from './MainPage';
import MainNav from '../../components/MainNav/MainNav';
import Footer from '../../components/Footer/Footer';

export default {
  title: 'Containers/MainPage',
  component: MainPage,
  subcomponents: {
    MainNav,
    Footer,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <MainPage {...args} />;

export const Default = Template.bind({});
Default.args = MainPage.defaultProps;
