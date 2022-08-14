/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = Footer.defaultProps;
