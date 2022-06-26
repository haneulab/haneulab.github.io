/**
 * next
 */
import Head from 'next/head';
/**
 * local interfaces & types
 */
interface PageSEOProps {
  title: string;
  description: string;
  keywords: string[];
}

const PageSEO: React.FC<PageSEOProps> = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      {title && <title>HaneuLab | {title}</title>}
      {!title && <title>HaneuLab | Home</title>}
    </Head>
  );
};
export default PageSEO;
