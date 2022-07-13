/**
 * next
 */
import type { AppProps } from 'next/app';
import Layout from 'src/components/layout/Layout';
/**
 * styles
 */
import 'styles/tailwind.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
