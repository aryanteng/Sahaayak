import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import DrawerComponent from "./DrawerComponent";
import Head from "next/head";
import { motion } from "framer-motion";

function Header() {
  const [drawer, setDrawer] = useState(false);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth < 800) {
        setDrawer(true);
      }
    }
  }, []);

  useEffect(() => {
    if (hover) {
      var cursor = document.getElementById("cursor");
      var cursor2 = document.getElementById("cursor2");
      document.body.addEventListener("mousemove", function (e) {
        (cursor.style.border = "2px solid #000 "),
          (cursor2.style.backgroundColor = "#000");
      });
    } else {
      var cursor = document.getElementById("cursor");
      var cursor2 = document.getElementById("cursor2");
      document.body.addEventListener("mousemove", function (e) {
        (cursor.style.border = "2px solid var(--theme)"),
          (cursor2.style.backgroundColor = "var(--theme)");
      });
    }
  }, [hover]);

  return (
    <div
      className={styles.navbar}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        <title>Sahaayak</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://i.ibb.co/BtsNhqt/logo.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A 2022 Web App for all of your Bioinformatics needs."
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="canonical" href="https://sahaayak.vercel.app/" />
        <meta
          name="keywords"
          content="Sahaayak, Practical Bioinformatics, DNA, ORFs, Convert DNA to Protein, Sequence Alignment, Alignment of DNA, Global Alignment, Local Alignment"
        />
        <meta name="author" content="Sahaayak" />

        <meta
          name="twitter:card"
          content="https://i.ibb.co/1v35btP/Sahaayak.png"
        />
        <meta name="twitter:site" content="https://sahaayak.vercel.app/" />
        <meta name="twitter:title" content="Sahaayak" />
        <meta
          name="twitter:description"
          content="A 2022 Web App for all of your Bioinformatics needs."
        />
        <meta
          name="twitter:image:src"
          content="https://i.ibb.co/1v35btP/Sahaayak.png"
        />
        <meta name="twitter:image:alt" content="Sahaayak" />

        <meta property="og:url" content="https://sahaayak.vercel.app/" />
        <meta property="og:type" content="Biology" />
        <meta property="og:title" content="Sahaayak" />
        <meta
          property="og:image"
          content="https://i.ibb.co/1v35btP/Sahaayak.png"
        />
        <meta
          property="og:description"
          content="A one-stop solution for your bioinformatic problems."
        />
        <meta property="og:site_name" content="Sahaayak" />

        <meta itemProp="name" content="Sahaayak" />
        <meta
          itemProp="description"
          content="A one-stop solution for your bioinformatic problems."
        />
        <meta
          itemProp="image"
          content="https://i.ibb.co/1v35btP/Sahaayak.png"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <Link href="/" passHref={true}>
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5, type: "spring" }}
          style={{ marginLeft: "1rem", cursor: "pointer" }}
        >
          Sahaayak
        </motion.h1>
      </Link>
      {/* {!drawer && ( */}
      <div className={styles.links}>
        <div className={styles.buttonElement}></div>
        <Link href="/" passHref={true}>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5, type: "spring" }}
            className={styles.link}
          >
            Home
          </motion.p>
        </Link>
        <Link href="/global" passHref={true}>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            className={styles.link}
          >
            Global
          </motion.p>
        </Link>
        <Link href="/local" passHref={true}>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5, type: "spring" }}
            className={styles.link}
          >
            Local
          </motion.p>
        </Link>

        <Link href="/end-free" passHref={true}>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
            className={styles.link}
          >
            End Free
          </motion.p>
        </Link>

        <Link href="/dna-to-protein" passHref={true}>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.25, duration: 0.5, type: "spring" }}
            className={styles.link}
          >
            DNA to Protein
          </motion.p>
        </Link>
        <Link href="/orfs" passHref={true}>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
            className={styles.link}
          >
            ORFs
          </motion.p>
        </Link>
        {/* <Link href="/about-us" passHref={true}>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.75, duration: 0.5, type: "spring" }}
            className={styles.link}
          >
            About
          </motion.p>
        </Link> */}
      </div>
      {/* )} */}
      {/* {drawer && ( */}
      <DrawerComponent />
    </div>
  );
}

export default Header;
