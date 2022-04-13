import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";

function CreatorCard({ imgSrc, name }) {
  return (
    <div className={styles.container}>
      <Avatar
        alt="Creator"
        src={imgSrc}
        sx={{ width: "80px", height: "80px" }}
      />
      <p>{name}</p>
    </div>
  );
}

export default CreatorCard;
