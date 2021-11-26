import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getConfig from 'next/config'

interface Props {
  serverVar?: string;
}

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// Will only be available on the server-side
console.log(serverRuntimeConfig.serverRuntimeVar)
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.publicRuntimeVar)



const Home: NextPage<Props> = ({serverVar}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Testing EnvVars in NextJS</title>
        <meta name="description" content="Testing EnvVars in NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Testing EnvVars in NextJS
        </h1>

        <p className={styles.description}>
          Buildtime
          <code className={styles.code}>{process.env.buildVar}</code>
        </p>

        <p className={styles.description}>
          Server Runtime 
          <code className={styles.code}>{serverVar}</code>
        </p>

        <p className={styles.description}>
          Public Runtime 
          <code className={styles.code}>{publicRuntimeConfig.publicRuntimeVar}</code>
        </p>
       </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  return { serverVar: serverRuntimeConfig.serverRuntimeVar }
}

export default Home
