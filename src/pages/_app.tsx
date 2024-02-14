import type {AppProps} from 'next/app';
import {ReactElement, ReactNode} from 'react';
import {NextPage} from 'next';
import Layout from '@/components/defaultLayout/layout';
import {AppStateProvider} from '@/lib/AppState';
import {Open_Sans} from 'next/font/google';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const open = Open_Sans({subsets: ['cyrillic-ext']});

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? Layout;
  return <main className={open.className}><AppStateProvider children={getLayout(<Component {...pageProps} />)}/></main>;

}