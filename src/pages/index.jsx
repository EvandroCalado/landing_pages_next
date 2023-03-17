import P from "prop-types";
import Home from "../templates/Home";

export default function Index({ json = null }) {
  return <Home json={json} />;
}

export const getStaticProps = async () => {
  const url =
    "https://strapi-production-b207.up.railway.app/api/pages?populate[sections][populate]=*&populate[menu][populate]=*";
  const slug = "landing-page";

  const raw = await fetch(`${url}&filters[slug]=${slug}`);
  const json = await raw.json();

  return {
    props: {
      json,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
