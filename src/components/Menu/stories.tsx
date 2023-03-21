import { Meta, Story } from '@storybook/react/types-6-0';
import Menu, { MenuProps } from '.';

import { args } from './args';
console.log(args);

const MenuStories: Meta = {
  title: 'Menu',
  component: Menu,
  args,
};

export const Template: Story<MenuProps> = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};

export default MenuStories;
