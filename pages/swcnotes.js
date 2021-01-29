import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useState } from 'react';

function myFunction() {
  document.body.classList.toggle('dark');
}

export default function Home() {
  const [dark, setDark] = useState(false);
  let cssProperties = {};
  if (dark) {
    cssProperties["--body-bg-color"] = "#393E41";
    cssProperties["--card-bg-color"] = "#587B7F";
    cssProperties["--card-border"] = "2px solid #587B7F";
    cssProperties["--tag-border"] = "1px solid #1E2019";
    cssProperties["--tag-bg-color"] = "#587B7F";
    cssProperties["--title-color"] = "#E5E5E5";
    cssProperties["--subheader-color"] = "#E5E5E5";
    cssProperties["--text-color"] = "#E5E5E5";
    cssProperties["--smallheader-color"] = "#E5E5E5";
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SWC Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img onClick={() => { setDark(!dark); myFunction(); }} style={{ marginLeft: '100%', marginTop: "20px", cursor: 'pointer' }} src="/sun.png"></img>

      <div className={styles.main} style={cssProperties}>
        <p className={styles.title}>
          Students Who Code
        </p>
        <p className={styles.text}>
          Updates and my thoughts about Students Who Code as I work on developing it.
        </p>

        <p className={styles.subheader}>
          Notes
        </p>

        <Link href="/notes1"><div className={styles.card} style={{ cursor: "pointer" }}>
          <p className={styles.smallheader}>Students Who Code V.2</p>
          <p style={{ paddingLeft: '15px' }} className={styles.text}>Learn about Students Who Code V.2 and the updates to come in the coming months. Also my thoughts and process for the new version.</p>
          <div className={styles.tag}>
            <p style={{ fontSize: '15px', textAlign: 'center', paddingTop: '5px' }} className={styles.text}>Read Now</p>
          </div>
        </div></Link>

        <br></br>

        <Link href="/notes2"><div className={styles.card} style={{ cursor: "pointer" }}>
          <p className={styles.smallheader}>Students Who Code Winter</p>
          <p style={{ paddingLeft: '15px' }} className={styles.text}>Students Who Code got a winter overlay this year.</p>
          <div className={styles.tag}>
            <p style={{ fontSize: '15px', textAlign: 'center', paddingTop: '5px' }} className={styles.text}>Read Now</p>
          </div>
        </div></Link>

        <br></br>



        <br></br>

        <footer>
          <Link href="/"><img style={{ cursor: 'pointer', display: "inline-block" }} src="home.png"></img></Link>
          <Link href="https://github.com/matt1208"><img style={{ cursor: 'pointer', display: "inline-block", paddingLeft: "10px" }} src="github.png"></img></Link>
          <Link href="https://studentswhocode.org"><img style={{ cursor: 'pointer', display: "inline-block", paddingLeft: "10px" }} src="external.png"></img></Link>
        </footer>

      </div>
    </div>
  )
}
