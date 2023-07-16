import {getLayoutFn} from "@/helpers/layout";
import SearchLayout from "@/layouts/SearchLayout/SearchLayout";
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Return() {
  return (
    <>
      <Head>
        <title>Noomad - Return</title>
        <meta name="description" content="The most affordable return flights" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        123
      </main>
    </>
  )
}