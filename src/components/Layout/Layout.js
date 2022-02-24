import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import React from 'react'

export default function Layout( { children } ) {
  return (
    <>
        <Header />
        <div>
            {children}
        </div>
        <Footer />
    </>
  )
}
