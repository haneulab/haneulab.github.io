import { ThemeContext } from 'contexts/ThemeContext';
import Layout from 'layouts/Layout';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import 'styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  useEffect(() => {
    setTheme('dark');
  }, []);
  return (
    <ThemeContext.Provider value={theme}>
      <Layout setTheme={setTheme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default MyApp;
