/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import CompareLibraryPage from './CompareLibaryPage';

import CompareLibraryPageContents from '../../page-contents/CompareLibraryPageContents/CompareLibraryPageContents';

export default {
  title: 'Containers/Pages/CompareLibraryPage',
  component: CompareLibraryPage,
  subcomponents: { CompareLibraryPageContents },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <CompareLibraryPage {...args} />;

export const Default = Template.bind({});
Default.args = CompareLibraryPage.defaultProps;
