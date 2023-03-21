import * as Styled from './styles';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import GoTop from '../../components/GoTop';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type BaseProps = {
  children: React.ReactNode;
  links: MenuLinkProps[];
  logoData: LogoLinkProps;
  html: string;
};

const Base = ({ links, logoData, html, children }: BaseProps) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={html} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

export default Base;
