import Link from 'next/link';
import P from 'prop-types';
import * as Styled from './styles';

const MenuLink = ({ children, link, newTab = false }) => {
  const isExternLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (isExternLink) {
    return (
      <Link href={link} passHref>
        <Styled.Container target={target}>{children}</Styled.Container>
      </Link>
    );
  }

  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};

export default MenuLink;
