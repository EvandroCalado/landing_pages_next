import { Meta, Story } from '@storybook/react/types-6-0';
import Navbar, { NavbarProps } from '.';

import links from './mock';

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
