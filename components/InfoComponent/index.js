import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function InfoComponent({ heading, desc, link }) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.75, type: "spring" }}
      className={styles.wrapper}
    >
      <motion.h1
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.5, type: "spring" }}
      >
        {heading}
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.5, type: "spring" }}
        dangerouslySetInnerHTML={{ __html: desc }}
      ></motion.p>
      <Link href={link} passHref={true}>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5, type: "spring" }}
          className={styles.btn}
        >
          Start
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default InfoComponent;
