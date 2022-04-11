import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function InfoComponent({ heading, desc, link }) {
  return (
    <div className={styles.wrapper}>
      <h1>{heading}</h1>
      <p dangerouslySetInnerHTML={{ __html: desc }}></p>
      <Link href={link} passHref={true}>
        <div className={styles.btn}>Start</div>
      </Link>
    </div>
  );
}

export default InfoComponent;
