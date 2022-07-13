/**
 * next
 */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="w-full bg-dark-primary text-dark-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
