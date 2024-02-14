import {Head, Html, Main, NextScript} from 'next/document';


import StyledComponentsRegistry from '../lib/registry';


export default function Document() {
  return (
    <Html lang="ru">
      <Head/>
      <body>
      <StyledComponentsRegistry>
        <Main/>
        <NextScript/>
      </StyledComponentsRegistry>
      </body>
    </Html>
  );
}