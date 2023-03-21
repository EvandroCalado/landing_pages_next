import { GetStaticProps } from 'next';
import { mapData } from '../api/map-data';
import Home, { HomeProps } from '../templates/Home';

export default function Index({ data = null }: HomeProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const url =
    'https://strapi-lading-pages.onrender.com/api/pages?populate=deep';
  const slug = 'landing-page';

  const raw = await fetch(`${url}&filters[slug]=${slug}`);
  const json = await raw.json();

  if (!json.data[0]) {
    return {
      notFound: true,
    };
  }

  const { attributes } = json.data[0];
  const data = mapData([attributes]);

  return {
    props: {
      data,
    },
    revalidate: 30,
  };
};
