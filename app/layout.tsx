import './styles/globals.css'
import Head from 'next/head'
import type { Metadata } from 'next'
import heroStyle from './styles/hero.scss'
import navbarStyle from './styles/navbar.scss'
import aboutStyle from './styles/about.scss'
import catalogStyle from './styles/catalog.scss'
import merchStyle from './styles/merch.scss'
import footerStyle from './styles/footer.scss'

export const metadata: Metadata = {
  title: "Poppy's",
  description: 'Your favorite ice cream place !', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html  lang="en">
      <Head>
        <title>Poppy's Ice Cream</title>
        <link rel="preload" href="http://localhost:3000/_next/static/css/app/layout.css?v=1690558771863" as="style" />
      </Head>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <meta name='keywords' content="Ice cream Icecream Poppy's food sweets cold"/>
      </Head>
      <body suppressHydrationWarning={true} className={`${heroStyle.dashboard} ${navbarStyle.dashboard} ${aboutStyle.dashboard} ${catalogStyle} ${merchStyle} ${footerStyle}`}>{children}</body>
    </html>
  )
}
