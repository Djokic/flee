import {Inter} from 'next/font/google'

import '@/styles/globals.css';
import '@/styles/helpers.scss';
import styles from './layout.module.scss';

const inter = Inter({subsets: ['latin'], preload: true});

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
    <head>
      <link rel="manifest" href="manifest.json"/>

      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="application-name" content="N00mad"/>
      <meta name="apple-mobile-web-app-title" content="N00mad"/>
      <meta name="theme-color" content="#10ac84"/>
      <meta name="msapplication-navbutton-color" content="#10ac84"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
      <meta name="msapplication-starturl" content="/"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

      <link rel="icon" sizes="256x256" href="icon.png"/>
      <link rel="apple-touch-icon" sizes="256x256" href="icon.png"/>
    </head>
    <body className={inter.className}>
    <div className={styles.Layout}>
      <header>
        <h1>N<span/><span/>mad</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
    </body>
    </html>
  )
}
