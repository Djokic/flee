'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from 'next/font/google'

import { TabsList } from "@/components/TabsList/TabsList";
import { Routes } from "@/app/routes";

import '@/styles/globals.css';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'], preload: true });

const Links = [
  { href: Routes.ONE_WAY, label: 'One Way' },
  { href: Routes.RETURN, label: 'Return' },
  { href: Routes.MULTI_CITY, label: 'Multi City' }
]

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.Layout}>
          <header>
            <h1>N<span /><span />mad</h1>
          </header>
          <main>
            <TabsList>
              {Links.map(({ href, label }) => (
                <Link key={href} href={href} aria-selected={pathname?.includes(href)}>
                  {label}
                </Link>
              ))}
            </TabsList>
            <div className={styles.Layout__Content}>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
