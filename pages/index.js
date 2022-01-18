import Head from 'next/head';
import Book from '../comps/Book';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weeks</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Book />

    </div>
  )
}
