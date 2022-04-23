import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

function OutputDNA({ isOrf, output }) {
  const [count, setCount] = useState("");

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([output], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = isOrf ? "orf.txt" : "protein.txt";
    document.body.appendChild(element);
    element.click();
  };

  useEffect(() => {
    var num = 0;
    output.map((item) => {
      num += item.length;
    });
    setCount(num);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h1>Output</h1>
        <textarea disabled className={styles.input} value={output} />

        <div
          className={styles.btn}
          onClick={() => {
            downloadTxtFile();
          }}
          style={{ marginTop: isOrf ? "-2rem" : "2rem" }}
        >
          Download
        </div>
        {isOrf ? (
          <p style={{ marginLeft: "1rem" }}>ORF Count: {count}</p>
        ) : (
          <></>
        )}
      </div>
      <img className={styles.img} src="assets/Output.svg" width="150"></img>
    </div>
  );
}

export default OutputDNA;
