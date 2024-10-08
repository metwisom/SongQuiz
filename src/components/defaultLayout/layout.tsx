import Navbar from '../navbar';
import Footer from '../footer';
import {ReactElement, ReactNode} from 'react';


export default function Layout(page: ReactElement): ReactNode {
  return (
    <>
      <Navbar/>
      {page}
      <Footer/>
    </>
  );
}