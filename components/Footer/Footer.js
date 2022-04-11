import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <motion.h1
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5, type: "spring" }}
          >
            Sahaayak
          </motion.h1>

          <Link href="about-us" passHref={true}>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5, type: "spring" }}
              className={styles.link}
            >
              About Us
            </motion.p>
          </Link>
        </div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75, type: "spring" }}
          style={{ marginTop: -1 + "rem", marginLeft: 1 + "rem" }}
        >
          <p>Sahaayak Project ©{year}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;
