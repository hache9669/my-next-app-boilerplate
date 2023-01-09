import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Text } from './index';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    text: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const HelloText = Template.bind({});
HelloText.args = {
  text: 'this is sample text component',
};
