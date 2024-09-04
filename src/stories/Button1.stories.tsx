import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button1 } from './Button1';

const meta = {
  title: 'Example/Button1',
  component: Button1,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button1>;

export default meta;
type Story = StoryObj<typeof meta>;


export const First: Story = {
  args: {
    primary: true,
    label: 'Button',
    backgroundColor: 'red'

  },
};

export const Second: Story = {
  args: {
    label: 'Button',
    backgroundColor: 'blue'
  },
};

export const third: Story = {
  args: {
    primary: false,
    size: 'large',
    label: 'Button',

  },
};



