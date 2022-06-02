import { ThemeProvider } from '@hooks/useTheme';
import type { AppProps } from 'next/app';
import '../src/index.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
