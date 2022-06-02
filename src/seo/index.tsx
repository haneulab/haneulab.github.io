import type { SEOComponentType } from '@apptypes/seo.type';
import Head from 'next/head';

const SEO: SEOComponentType = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
};
export default SEO;
