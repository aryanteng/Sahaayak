import { useState } from "react";
import Define from "../components/DefineComponent/Define";
import InputDNA from "../components/DnaComponents/InputDNA";
import OutputDNA from "../components/DnaComponents/InputDNA/OutputDNA";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Global.module.css";

export default function ORFS() {
  const topic = "ORFS";
  const definition =
    "An open reading frame is a portion of a DNA molecule that, when translated into amino acids, contains no stop codons.<br/><br/> The genetic code reads DNA sequences in groups of three base pairs, which means that a double-stranded DNA molecule can read in any of six possible reading frames--three in the forward direction and three in the reverse. A long open reading frame is likely part of a gene.";
  //   LINK AND CONTENT PLEASE SEE OF ORFS
  const link = "https://vlab.amrita.edu/?sub=3&brch=274&sim=1431&cnt=1";
  const [seq, setSeq] = useState("");
  const [output, setOutput] = useState("");
  const submit = () => {
    setOutput(seq);
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
        />
        {output.length > 0 && <OutputDNA isOrf={true} output={output} />}
      </div>
      <Footer />
    </>
  );
}
