export const LoadPages = async ( slugPage = '') => {
  const cleanSlug = slug ? `?slug=${slugPage.replace(/[^a-z0-9-_]/gi)}` : '';
  const url =
    "https://strapi-production-b207.up.railway.app/api/pages?populate[sections][populate]=*&populate[menu][populate]=*";
  const slug = "landing-page";

  const raw = await fetch(`${url}&filters[slug]=${slug}`);
  const json = await raw.json();
}