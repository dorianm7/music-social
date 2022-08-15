/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import App from './App';

export default {
  title: 'Containers/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = App.defaultProps;