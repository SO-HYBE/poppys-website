import Head from 'next/head'
import './styles/globals.css'
import type { Metadata } from 'next'
import styles from './styles/hero.scss'

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <meta name='keywords' content="Ice cream Icecream Poppy's food sweets cold"/>
      </Head>
      <body suppressHydrationWarning={true} className={styles.dashboard}>{children}</body>
    </html>
  )
}
