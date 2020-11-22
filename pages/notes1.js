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
            Students Who Code V.2
        </p>

        <p className={styles.subheader}>
            What to Expect 
        </p>

        <p className={styles.text}>With this upcoming update to Students Who Code, users can expect a couple of major updates. The new update will include: a new homepage, a change in the color scheme, and the cancelation of the signup/login system.
            <br></br><br></br>
            The new homepage will be more modern and easier for users to obtain information. The goal for this new homepage is for users to quickly understand the mission of Students Who Code, the moment the page loads. Along with the refresh of the homepage, the color scheme is also getting a refresh. To make the site more appealing this change was needed, and in the works is a light mode for the website! 
            <br></br><br></br>
            Students wanting to learn will no longer have to sign up or login. When trying to make the user experience better I realized that making people sign up was another obstacle for students wanting to learn. Now, no one needs to input personal information, be required a have an email, or remember a password. Anyone with an old member account should not worry as the old database will be deleted shortly after the deployment of V.2</p>

        <br></br>

        <p className={styles.subheader}>
            The Vision Behind V.2
        </p>

        <p className={styles.text}>
            Students Who Code V.2 goal is to provide a better user experience, and allow for content to be brought to the user faster and easier then before. Along with the changes and refreshes, behind the scenes Students Who Code will be moving to a new hosting platform and be built in a new coding language. Right now, Students Who Code is entirety built using HTML and CSS. In V.2, the homepage and the rest of the pages will transition to Next.js, providing a seamless experience. 
        </p>

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
