/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ListSearch from './ListSearch';

export default {
  title: 'Components/ListSearch',
  component: ListSearch,
};

const Template = (args) => <ListSearch {...args} />;

export const Default = Template.bind({});
Default.args = ListSearch.defaultProps;
