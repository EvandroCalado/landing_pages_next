import { MenuProps } from '../Menu';

export const args: MenuProps = {
  link: '#',
  text: 'Logo',
  image:
    'https://res.cloudinary.com/dnhsdenji/image/upload/v1678735148/landing_page_2_c6baa21725_c39ce760eb.svg',
  links: [
    {
      children: 'Intro',
      link: '#intro',
      newTab: false,
    },
    {
      children: 'Grid One',
      link: '#grid-one',
      newTab: false,
    },
  ],
};
