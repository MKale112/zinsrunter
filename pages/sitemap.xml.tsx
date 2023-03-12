import { GetServerSidePropsContext } from 'next';

export default function SitemapGenerator() {}

const pages = ['formular', 'uber-uns', 'datenschultz', 'agb', 'erstinformation', 'impressum', 'kontakt'];

export const getServerSideProps = async ({ req, res }: GetServerSidePropsContext): Promise<{ props: any }> => {
  const host = req.headers.host;
  const protocol = host?.includes('http') ? '' : 'http://';
  console.log(process.env);

  let items = '';
  pages.forEach(
    (page) =>
      (items += `
                  <url>
                    <loc>${`${protocol}${host}/${page}`}</loc>
                    <lastmod>yi273t4i</lastmod>
                  </url>
                `),
  );

  const sitemap = `
    <xml version="1.0" encoding="UTF-8">
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
         ${items}
    </urlset>
    </xml>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
