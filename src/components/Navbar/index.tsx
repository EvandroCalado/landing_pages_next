import * as Styled from './styles';
import MenuLink, { MenuLinkProps } from '../MenuLink';

export type NavbarProps = {
  links?: MenuLinkProps[];
};

const Navbar = ({ links = [] }: NavbarProps) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};

export default Navbar;
