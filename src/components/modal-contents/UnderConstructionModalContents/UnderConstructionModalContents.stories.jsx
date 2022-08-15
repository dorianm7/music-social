/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import UnderConstructionModalContents from './UnderConstructionModalContents';

export default {
  title: 'Components/ModalContents/UnderConstructionModalContents',
  component: UnderConstructionModalContents,
};

const Template = (args) => <UnderConstructionModalContents {...args} />;

export const Default = Template.bind({});
Default.args = UnderConstructionModalContents.defaultProps;
