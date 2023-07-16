import {TabsList} from "@/components/TabsList/TabsList";
import {Routes} from "@/helpers/routes";
import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";

import styles from './MainLayout.module.scss';

type MainLayoutProps = {
  children: React.ReactNode;
}

const Links = [
  {href: Routes.ONE_WAY, label: 'One Way'},
  {href: Routes.RETURN, label: 'Return'},
  {href: Routes.MULTI_CITY, label: 'Multi City'},
  {href: Routes.EXPLORE, label: 'Explore'}
]
export default function MainLayout({children}: MainLayoutProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className={styles.MainLayout}>
        <header>
          <h1>N<span/><span/>mad</h1>
        </header>
        <main>
          <TabsList>
            {Links.map(({href, label}) => (
              <Link key={href} href={href} aria-selected={router.pathname === href}>
                {label}
              </Link>
            ))}
          </TabsList>
          {children}
        </main>
      </div>
    </>
  );
}