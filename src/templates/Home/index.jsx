import P from 'prop-types';
import Base from '../Base';
import GridTwoColumn from '../../components/GridTwoColumn';
import GridContent from '../../components/GridContent';
import GridSection from '../../components/GridSection';
import GridImage from '../../components/GridImage';
import Pricing from '../../components/Pricing';
import SectionContact from '../../components/SectionContact';
import Head from 'next/head';

const Home = ({ data }) => {
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
      <Base
        links={links}
        html={footerHtml}
        logoData={{ links, text, link, image }}
      >
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;

          if (component === 'section.section-two-columns') {
            return <GridTwoColumn key={key} {...section} />;
          }

          if (component === 'section.section-content') {
            return <GridContent key={key} {...section} />;
          }

          if (component === 'section.section-grid-text') {
            return <GridSection key={key} {...section} />;
          }

          if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...section} />;
          }

          if (component === 'section.section-pricing') {
            return <Pricing key={key} {...section} />;
          }

          if (component === 'section.section-contact') {
            return <SectionContact key={key} {...section} />;
          }

          return null;
        })}
      </Base>
    </>
  );
};

Home.propTypes = {
  data: P.array,
};

export default Home;
