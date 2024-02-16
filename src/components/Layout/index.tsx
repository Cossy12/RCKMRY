import Head from 'next/head'

import Header from 'components/Header'

const SITE_TITLE = 'Rick '

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col w-screen h-screen bg-green-950 overflow-auto">
      <Head>
        <link rel="icon" href="/rick.png" />
        <meta name="description" content="Rick & Morty" />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{SITE_TITLE}</title>
      </Head>
      <Header />
      <div className="w-full h-full pt-28 pb-8 fh:px-48 iphone:px-6">
        {children}
      </div>
    </div>
  )
}

export default Layout
