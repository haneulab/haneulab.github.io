import Head from 'next/head';

interface DefaultSEOProps {
  pageDescription: string;
  pageTitle: string;
  pageKeywords: string[];
}

type DefaultSEOComponentType = React.FC<DefaultSEOProps>;

const DefaultSEO: DefaultSEOComponentType = ({
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
