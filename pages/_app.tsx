import Layout from '@components/Layout';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import 'styles/index.css';
import { Theme } from '@components/contexts/Theme';
import { Language } from '@components/contexts/Language';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [language, setLanguage] = useState<'English' | 'Korean'>('English');
  useEffect(() => {
    setTheme('light');
    setLanguage('English');
  }, []);
  return (
    <Language.Provider value={language}>
      <Theme.Provider value={theme}>
        <Layout setters={{ setTheme, setLanguage }}>
          <Component {...pageProps} />
        </Layout>
      </Theme.Provider>
    </Language.Provider>
  );
};

export default App;
