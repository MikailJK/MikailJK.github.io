import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SubNavBar from './posts/sub_nav_bar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet"/>
      </Head>

      <div>
        <h1 className={styles.title}>
          Mikail Krochta
        </h1>

        <p className={styles.description}>
           Computer Scientist {/*<span class="typing" style="color:#0E8388"></span> */}
        </p>

        <SubNavBar />

      </div>


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
