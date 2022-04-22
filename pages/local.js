import Define from "../components/DefineComponent/Define";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Global.module.css";
import InputAlignment from "../components/InputAlignment/InputAlignment";
import OutputAlignment from "../components/OutputAlignment/OutputAlignment";
import { useState } from "react";

export default function Local() {
  const topic = "Local Alignment";
  const definition =
    "Sequences which are suspected to have similarity or even dissimilar sequences can be compared with local alignment method. It finds local regions with high level of similarity.These two methods of alignments are defined by different algorithms, which use scoring matrices to align the two different series of characters or patterns (sequences). The two different alignment methods are mostly defined by Dynamic programming approach for  aligning two different sequences.";
  const link = "https://vlab.amrita.edu/?sub=3&brch=274&sim=1433&cnt=1";
  const [seqA, setSeqA] = useState("");
  const [seqB, setSeqB] = useState("");
  const [gap, setGap] = useState("");
  const [match, setMatch] = useState("");
  const [misMatch, setMisMatch] = useState("");

  const submit = () => {
    console.log("seqA", seqA);
    console.log("seqB", seqB);
    console.log("gap", gap);
    console.log("match", match);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Define topic={topic} definition={definition} link={link} />
        <InputAlignment
          seqA={seqA}
          setSeqA={setSeqA}
          seqB={seqB}
          setSeqB={setSeqB}
          match={match}
          setMatch={setMatch}
          misMatch={misMatch}
          setMisMatch={setMisMatch}
          gap={gap}
          setGap={setGap}
          submit={submit}
        />
        <OutputAlignment />
      </div>
      <Footer />
    </>
  );
}
