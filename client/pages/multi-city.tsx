import {getLayoutFn} from "@/helpers/layout";
import SearchLayout from "@/layouts/SearchLayout/SearchLayout";
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function MultiCity() {
  return (
    <>
      <Head>
        <title>Noomad - Multi-City</title>
        <meta name="description" content="The most affordable multi-city flights" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        123
      </main>
    </>
  )
}