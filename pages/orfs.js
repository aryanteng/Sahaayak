import { useState } from "react";
import Define from "../components/DefineComponent/Define";
import InputDNA from "../components/DnaComponents/InputDNA";
import OutputDNA from "../components/DnaComponents/InputDNA/OutputDNA";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Global.module.css";

export default function ORFS() {
  const topic = "ORFs";
  const definition =
    "An open reading frame is a portion of a DNA molecule that, when translated into amino acids, contains no stop codons.The genetic code reads DNA sequences in groups of three base pairs, which means that a double-stranded DNA molecule can read in any of six possible reading frames--three in the forward direction and three in the reverse. A long open reading frame is likely part of a gene.";
  //   LINK AND CONTENT PLEASE SEE OF ORFS
  const link = "https://vlab.amrita.edu/?sub=3&brch=274&sim=1431&cnt=1";
  const [seq, setSeq] = useState("");
  const [minLen, setMinLen] = useState("");
  const [output, setOutput] = useState([]);
  const [orfCount, setOrfCount] = useState();
  const [error, setError] = useState("");
  const nucleotides = ["A", "T", "C", "G"];
  const submit = async () => {
    for (let i = 0; i < seq.length; i++) {
      if (!nucleotides.includes(setSeq[i])) {
        setError("Only A, T, C and G are valid characters!");
      }
    }
    const response = await fetch("http://127.0.0.1:5000/orfs/", {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        dna: seq,
        minLen: minLen,
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json",
      },
    });
    const res = await response.json();
    if (res) {
      if (error.length > 0) {
        setError("");
      }
      setOutput(res.body.slice(0, 6));
      setOrfCount(res.body[6]);
      console.log("orfs", output);
      console.log("count", orfCount);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Define topic={topic} definition={definition} link={link} />
        <InputDNA
          seq={seq}
          setSeq={setSeq}
          output={output}
          setOutput={setOutput}
          submit={submit}
          isOrf={true}
          minLen={minLen}
          setMinLen={setMinLen}
          error={error}
        />
        {output.length > 0 && error.length <= 0 && (
          <OutputDNA isOrf={true} output={output} orfCount={orfCount} />
        )}
      </div>
      <Footer />
    </>
  );
}
