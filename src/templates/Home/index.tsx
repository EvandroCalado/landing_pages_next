import Base from '../Base';
import GridTwoColumn, {
  GridTwoColumnProps,
} from '../../components/GridTwoColumn';
import GridContent, { GridContentProps } from '../../components/GridContent';
import GridSection, { GridSectionProps } from '../../components/GridSection';
import GridImage, { GridImageProps } from '../../components/GridImage';
import Pricing, { PricingProps } from '../../components/Pricing';
import SectionContact, {
  SectionContactProps,
} from '../../components/SectionContact';
import Head from 'next/head';
import { MenuLinkProps } from '../../components/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink';

export type SectionProps =
  | GridImageProps
  | GridSectionProps
  | GridTwoColumnProps
  | GridContentProps
  | PricingProps
  | SectionContactProps;

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};

export type HomeProps = {
  data: PageData[];
};

const Home = ({ data }: HomeProps) => {
  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, image } = menu;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Landing Page" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base links={links} html={footerHtml} logoData={{ text, link, image }}>
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;

          if (component === 'section.section-two-columns') {
            return (
              <GridTwoColumn key={key} {...(section as GridTwoColumnProps)} />
            );
          }

          if (component === 'section.section-content') {
            return <GridContent key={key} {...(section as GridContentProps)} />;
          }

          if (component === 'section.section-grid-text') {
            return <GridSection key={key} {...(section as GridSectionProps)} />;
          }

          if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...(section as GridImageProps)} />;
          }

          if (component === 'section.section-pricing') {
            return <Pricing key={key} {...(section as PricingProps)} />;
          }

          if (component === 'section.section-contact') {
            return (
              <SectionContact key={key} {...(section as SectionContactProps)} />
            );
          }

          return null;
        })}
      </Base>
    </>
  );
};

export default Home;
