import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  const [hover, setHover] = useState(false);

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
      className={styles.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <Link href="/">
            <h1 style={{ cursor: "pointer" }}>Sahaayak</h1>
          </Link>
          <Link href="/about-us" passHref={true}>
            <p className={styles.link}>About Us</p>
          </Link>
        </div>
        <div style={{ marginTop: -1 + "rem", marginLeft: 1 + "rem" }}>
          <p>The Sahaayak Project ©{year}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
