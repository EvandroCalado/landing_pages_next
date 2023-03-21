import { Meta, Story } from '@storybook/react/types-6-0';
import Menu, { MenuProps } from '.';

import linksMock from '../Navbar/mock';

const MenuStories: Meta = {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
};

export const Template: Story<MenuProps> = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};

export default MenuStories;
