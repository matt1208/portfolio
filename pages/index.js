import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matthew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <p className={styles.title}>
          Hi, I'm Matthew
        </p>
        <p className={styles.text}>
          Description..
        </p>

        <p className={styles.subheader}>
          Projects
        </p>

        <div className={styles.card}>
          <p className={styles.smallheader}>Students Who Code</p>
          <p style={{ paddingLeft: '15px' }} className={styles.text}>Description</p>
          <div className={styles.tag}>
            Working On
          </div>
        </div>

      </div>
    </div>
  )
}
