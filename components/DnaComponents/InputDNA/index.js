import React, { useState } from "react";
import styles from "./styles.module.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import { spacing } from "@mui/system";

const useStyles = makeStyles({
  select: {
    "&:before": {
      borderColor: "var(--theme)",
    },
    "&:after": {
      borderColor: "var(--theme)",
    },
    "&:not(.Mui-disabled):hover::before": {
      borderColor: "var(--theme)",
    },
  },
  icon: {
    fill: "#fff",
  },
  root: {
    color: "var(--theme)",
  },
});
function InputDNA({ seq, setSeq, submit, isOrf }) {
  const [min, setMin] = useState();

  const classes = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h1>Input</h1>
        <textarea
          value={seq}
          onChange={(e) => {
            setSeq(e.target.value);
          }}
          className={styles.input}
        />
        {isOrf && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "1rem",
              marginBottom: "0rem",
            }}
          >
            <p style={{ fontWeight: "bold" }}>Minimal ORF Length :</p>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={min}
              label="Minimum ORF Length"
              onChange={(e) => setMin(e.target.value)}
              sx={{
                color: "#fff",
                paddingLeft: "0.5rem !important",
                paddingRight: "0.5rem !important",
                width: "120px",
                border: "2px solid var(--theme)",
                borderRadius: "2rem",
              }}
              inputProps={{
                classes: {
                  icon: classes.icon,
                  root: classes.root,
                },
              }}
            >
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={75}>75</MenuItem>
              <MenuItem value={150}>150</MenuItem>
              <MenuItem value={300}>300</MenuItem>
              <MenuItem value={600}>600</MenuItem>
            </Select>
          </div>
        )}

        <div
          className={styles.btn}
          onClick={() => {
            submit();
          }}
        >
          Submit
        </div>
      </div>
      <img className={styles.img} src="assets/Flask.svg" width="150"></img>
    </div>
  );
}

export default InputDNA;
