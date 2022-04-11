import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h1>Sahaayak</h1>
          <Link href="about-us" passHref={true}>
            <p className={styles.link}>About Us</p>
          </Link>
        </div>
        <div style={{ marginTop: -1 + "rem", marginLeft: 1 + "rem" }}>
          <p>Sahaayak Project ©{year}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
