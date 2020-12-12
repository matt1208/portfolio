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

      <img onClick={() => {setDark(!dark); myFunction();}} style={{ marginLeft: '100%', marginTop: "20px", cursor: 'pointer'}} src="/sun.png"></img>
      
      <div className={styles.main} style={cssProperties}>
        <p className={styles.title}>
            Students Who Code Holiday
        </p>

        <p className={styles.text}>Starting on December 5th, Students Who Code received a holiday overlay. I used an npm package, <a href="https://www.npmjs.com/package/resnow" style={{ textDecoration: "underline" }}>resnow</a>, to make snow fall across the home page of Students Who Code. Along with the snow falling overlay to bring some holiday cheer, the first over Students Who Code Holiday Challenge was launched. The challenge tasks participants to create a holiday themed website, weather it was a very simple site or a complex design, the challenge was created to let people show off their creativity and skills.</p>

        <br></br>


        <br></br>

        <footer>
          <Link href="https://github.com/matt1208"><img style={{ cursor: 'pointer', display: "inline-block" }} src="github.png"></img></Link>
          <Link href="https://studentswhocode.org"><img style={{ cursor: 'pointer', display: "inline-block", paddingLeft: "10px" }} src="external.png"></img></Link>
        </footer>

      </div>
    </div>
  )
}
