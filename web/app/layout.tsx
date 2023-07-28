import { Inter } from 'next/font/google'

import '@/styles/globals.css';
import '@/styles/helpers.scss';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'], preload: true });

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.Layout}>
          <header>
            <h1>N<span /><span />mad</h1>
          </header>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
