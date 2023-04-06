import { GetServerSidePropsContext } from 'next';

export default function SitemapGenerator() {}

// If updated pages, update lastModDate to the current date
const pages = ['formular', 'uber-uns', 'datenschutz', 'agb', 'erstinformation', 'impressum', 'kontakt'];
const lastModDate = '2023-03-12'; // YYYY-MM-DD

export const getServerSideProps = async ({ req, res }: GetServerSidePropsContext): Promise<{ props: any }> => {
  const host = req.headers.host;
  const protocol = req.headers.protocol ?? 'http://';

  let items = '';
  pages.forEach(
    (page) =>
      (items += `
                  <url>
                    <loc>${`${protocol}${host}/${page}`}</loc>
                    <lastmod>${lastModDate}</lastmod>
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
