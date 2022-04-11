import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import DrawerComponent from "./DrawerComponent";
import Head from "next/head";
import { motion } from "framer-motion";

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
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5, type: "spring" }}
          style={{ marginLeft: "1rem", cursor: "pointer" }}
        >
          Sahaayak
        </motion.h1>
      </Link>
      {!drawer && (
        <div className={styles.links}>
          <div className={styles.buttonElement}></div>
          <Link href="/global" passHref={true}>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5, type: "spring" }}
              className={styles.link}
            >
              Global
            </motion.p>
          </Link>
          <Link href="/local" passHref={true}>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5, type: "spring" }}
              className={styles.link}
            >
              Local
            </motion.p>
          </Link>
          <Link href="/end-free" passHref={true}>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.25, duration: 0.5, type: "spring" }}
              className={styles.link}
            >
              End-Free
            </motion.p>
          </Link>

          <Link href="/dna-to-protein" passHref={true}>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
              className={styles.link}
            >
              DNA to Protein
            </motion.p>
          </Link>
          <Link href="/orfs" passHref={true}>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.75, duration: 0.5, type: "spring" }}
              className={styles.link}
            >
              ORFs
            </motion.p>
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
