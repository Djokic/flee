import {getLayoutFn} from "@/helpers/layout";
import SearchLayout from "@/layouts/SearchLayout/SearchLayout";
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Explore() {
  return (
    <>
      <Head>
        <title>Noomad - Explore</title>
        <meta name="description" content="Explore low cost flights from any airport" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        123
      </main>
    </>
  )
}