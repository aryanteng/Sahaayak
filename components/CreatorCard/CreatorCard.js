import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function CreatorCard({ imgSrc, name, email }) {
  const mail = `mailto:${email}`;
  return (
    <div className={styles.container}>
      <Avatar
        alt="Creator"
        src={imgSrc}
        sx={{ width: "80px", height: "80px" }}
      />
      <div>
        <p>{name}</p>
        <a href={mail} className={styles.mail}>
          <p
            className={styles.mail}
            style={{ fontSize: ".9rem", marginTop: "-.8rem" }}
          >
            <MailOutlineIcon sx={{ marginRight: "5px", fontSize: "1rem" }} />
            {email}
          </p>
        </a>
      </div>
    </div>
  );
}

export default CreatorCard;
