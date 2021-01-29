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
                <title>Matthew</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <img onClick={() => { setDark(!dark); myFunction(); }} style={{ marginLeft: '100%', marginTop: "20px", cursor: 'pointer' }} src="/sun.png"></img>

            <div className={styles.main} style={cssProperties}>
                <p className={styles.title}>
                    myDash
                 </p>
                <p className={styles.text}>
                    Check you some pictures of myDash! The project is currently a private personal project.
                </p>

                <br></br>

                <div className={styles.grid}>
                    <img src="mydash-1.png" height="400px" className={styles.imagecard}></img>
                    <img src="mydash-2.png" height="400px" className={styles.imagecard}></img>
                    <img src="mydash-3.png" height="400px" width="700px" className={styles.imagecard}></img>
                </div>
                <br></br>

                <footer>
                    <Link href="/"><img style={{ cursor: 'pointer' }} src="home.png"></img></Link>
                    <Link href="https://github.com/matt1208"><img style={{ cursor: 'pointer', paddingLeft: "10px" }} src="github.png"></img></Link>
                </footer>

            </div>
        </div>
    )
}
