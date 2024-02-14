import Navbar from '../navbar';
import Footer from '../footer';
import {ReactElement, ReactNode} from 'react';

import "./Test.css"

export default function Layout(page: ReactElement): ReactNode {
  return (
    <>
      <Navbar/>
      <main>{page}</main>
      <Footer/>
    </>
  );
}