import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
      </Head>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default Layout