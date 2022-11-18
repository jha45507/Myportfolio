import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
      </Head>
      <div>{children}</div>
    </div>
  )
}

export default Layout