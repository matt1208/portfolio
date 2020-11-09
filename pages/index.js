import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useState } from 'react';

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark", "card-dark");
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
        <title>Matthew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main} style={cssProperties}>
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
          <p className={styles.smallheader}>Students Who Code <Link href="https://studentswhocode.org/">&rarr;</Link></p>
          <p style={{ paddingLeft: '15px' }} className={styles.text}>Computer science and coding courses made for middle school and high school students, created by students.</p>
          <div className={styles.tag}>
            <p style={{ paddingTop: '3px' }}>Working On</p>
          </div>
        </div>

        <br></br>

        <div className={styles.card}>
          <p className={styles.smallheader}>Dive In <Link href="https://swimdivein.com/">&rarr;</Link></p>
          <p style={{ paddingLeft: '15px' }} className={styles.text}>Dive In is a website focused around swimming and water activities. Dive In offers a blog and free workouts people can download.</p>
          <div className={styles.tag}>
            <p style={{ paddingTop: '3px' }}>Personal</p>
          </div>
        </div>

        <br></br>
        <button onClick={() => {setDark(!dark); myFunction();}}>Dark</button>

      </div>
    </div>
  )
}
