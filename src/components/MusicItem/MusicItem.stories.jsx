/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import MusicItem from './MusicItem';

export default {
  title: 'Components/MusicItem',
  component: MusicItem,
  argTypes: {
    labelColor: { control: 'color' },
  },
};

const Template = (args) => <MusicItem {...args} />;

export const Default = Template.bind({});
Default.args = MusicItem.defaultProps;

export const Label = Template.bind({});
Label.args = {
  ...Default.args,
  labelColor: 'rgb(250, 0, 0)',
};

export const RightComponent = Template.bind({});
RightComponent.args = {
  ...Default.args,
  rightComponent: 'Text right component',
};
