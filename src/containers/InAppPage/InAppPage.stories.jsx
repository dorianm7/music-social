/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import InAppPage from './InAppPage';
import AppNav from '../../components/AppNav/AppNav';
import Footer from '../../components/Footer/Footer';

export default {
  title: 'Containers/InAppPage',
  component: InAppPage,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
  subcomponents: {
    AppNav,
    Footer,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <InAppPage {...args} />;

export const Default = Template.bind({});
Default.args = InAppPage.defaultProps;
