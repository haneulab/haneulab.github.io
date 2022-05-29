import { DefaultSEOProps } from 'interfaces/seo';
import Head from 'next/head';

const DefaultSEO: React.FC<DefaultSEOProps> = ({
  pageDescription,
  pageTitle,
  pageKeywords,
}) => {
  return (
    <Head>
      <meta name="keywords" content={pageKeywords.join(', ')} />
      <meta name="description" content={pageDescription} />
      <title>{pageTitle}</title>
    </Head>
  );
};
export default DefaultSEO;
