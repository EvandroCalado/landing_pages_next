import * as Styled from './styles';
import SectionContainer from '../SectionContainer';
import LogoLink from '../LogoLink';
import Navbar from '../Navbar';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';
import { LogoLinkProps } from '../LogoLink';
import { MenuLinkProps } from '../MenuLink';

export type MenuProps = {
  links?: MenuLinkProps[];
  logoData: LogoLinkProps;
};

const Menu = ({ links = [], logoData }: MenuProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <Navbar links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

export default Menu;
