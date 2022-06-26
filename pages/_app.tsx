/**
 * next
 */
import type { AppProps } from 'next/app';
/**
 * styles
 */
import '../styles/tailwind.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
