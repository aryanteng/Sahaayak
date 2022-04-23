import React from "react";
import styles from "./styles.module.css";

function OutputDNA({ isOrf }) {
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob(["hello world"], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = isOrf ? "orf.txt" : "protein.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h1>Output</h1>
        <textarea disabled className={styles.input} />
        <div
          className={styles.btn}
          onClick={() => {
            downloadTxtFile();
          }}
        >
          Download
        </div>
      </div>
      <img className={styles.img} src="assets/Output.svg" width="150"></img>
    </div>
  );
}

export default OutputDNA;
