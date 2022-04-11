import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.css";

function NavLinks() {
  return (
    // user?(
    <List>
      <Link href="/global" style={{ textDecoration: "none" }}>
        <ListItem className={styles.mobileLink}>
          <ListItemText primary="Global" />
        </ListItem>
      </Link>

      <Link href="/local" style={{ textDecoration: "none" }}>
        <ListItem className={styles.mobileLink}>
          <ListItemText primary="Local" />
        </ListItem>
      </Link>

      <Link href="/end-free" style={{ textDecoration: "none" }}>
        <ListItem className={styles.mobileLink}>
          <ListItemText primary="End-Free" />
        </ListItem>
      </Link>
      <Link href="/dna-to-protein" style={{ textDecoration: "none" }}>
        <ListItem className={styles.mobileLink}>
          <ListItemText primary="DNA to Protein" />
        </ListItem>
      </Link>
      <Link href="/orfs" style={{ textDecoration: "none" }}>
        <ListItem className={styles.mobileLink}>
          <ListItemText primary="ORFs" />
        </ListItem>
      </Link>
      <hr style={{ color: "#636262", width: "90%", opacity: 0.2 }} />
    </List>
  );
}

export default NavLinks;
