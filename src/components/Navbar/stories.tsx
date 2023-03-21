import { Meta, Story } from '@storybook/react/types-6-0';
import Navbar, { NavbarProps } from '.';

import dataSection from '../../api/data.json';
const links = dataSection[0].menu.menu_links;

const NavbarStories: Meta = {
  title: 'Navbar',
  component: Navbar,
  args: {
    links,
  },
};

export const Template: Story<NavbarProps> = (args) => {
  return (
    <div>
      <Navbar {...args} />
    </div>
  );
};

export default NavbarStories;
