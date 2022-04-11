import React from "react";
import styles from "./styles.module.css";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>Sahaayak</h1>
        <a>
          <p>About Us</p>
        </a>
      </div>
      <div style={{ marginTop: "-1rem" }}>
        <p>Sahaayak Project ©{year}</p>
      </div>
    </div>
  );
}

export default Footer;
