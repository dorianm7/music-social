/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import CompareLibraryPage from './CompareLibaryPage';

export default {
  title: 'Containers/CompareLibraryPage',
  component: CompareLibraryPage,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <CompareLibraryPage {...args} />;

export const Default = Template.bind({});
Default.args = CompareLibraryPage.defaultProps;
