import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import DrawerComponent from "./DrawerComponent";
import Head from "next/head";

function Header() {
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth < 800) {
        setDrawer(true);
      }
    }
  }, []);

  return (
    <div className={styles.navbar}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Sahaayak</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/icon-32x32.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Link href="/">
        <h1 style={{ marginLeft: "1rem", cursor: "pointer" }}>Sahaayak</h1>
      </Link>
      {!drawer && (
        <div className={styles.links}>
          <div className={styles.buttonElement}></div>
          <Link href="/global" passHref={true}>
            <p className={styles.link}>Global</p>
          </Link>
          <Link href="/local" passHref={true}>
            <p className={styles.link}>Local</p>
          </Link>
          <Link href="/end-free" passHref={true}>
            <p className={styles.link}>End-Free</p>
          </Link>
          {/* <Link href="/event" passHref={true}>
            <p className={styles.link}>Event</p>
          </Link> */}
          <Link href="/dna-to-protein" passHref={true}>
            <p className={styles.link}>DNA to Protein</p>
          </Link>
          <Link href="/orfs" passHref={true}>
            <p className={styles.link}>ORFs</p>
          </Link>
        </div>
      )}
      {drawer && (
        <div className={styles.links} style={{ marginRight: "3rem" }}>
          <DrawerComponent />
        </div>
      )}
    </div>
  );
}

export default Header;
