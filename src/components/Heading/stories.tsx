import { Meta, Story } from '@storybook/react/types-6-0';
import Heading, { HeadingProps } from '.';

const HeadingStories: Meta = {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default HeadingStories;

export const light: Story<HeadingProps> = (args) => <Heading {...args} />;
export const dark: Story<HeadingProps> = (args) => <Heading {...args} />;

light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

dark.args = {
  children: 'O texto está claro',
  colorDark: false,
};
