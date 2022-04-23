import { useState, useEffect } from "react";
import Define from "../components/DefineComponent/Define";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InputAlignment from "../components/InputAlignment/InputAlignment";
import OutputAlignment from "../components/OutputAlignment/OutputAlignment";
import styles from "../styles/Global.module.css";

export default function Global() {
  const [data, setData] = useState([{}]);
  const topic = "Global Alignment";
  const definition =
    "Under the assumption that both input sequences a and  b stem from the same origin, a global alignment tries to identify matching parts and the changes needed to transfer one sequence into the other.";
  const link = "https://vlab.amrita.edu/?sub=3&brch=274&sim=1431&cnt=1";
  const [seqA, setSeqA] = useState("");
  const [seqB, setSeqB] = useState("");
  const [gap, setGap] = useState("");
  const [match, setMatch] = useState("");
  const [misMatch, setMisMatch] = useState("");
  const [matrix, setMatrix] = useState([]);
  const [original, setOriginal] = useState([]);
  const [optimal, setOptimal] = useState([]);
  const submit = async () => {
    const response = await fetch("http://127.0.0.1:5000/global/", {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        seqA: seqA,
        seqB: seqB,
        gap: gap,
        misMatch: misMatch,
        match: match,
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json",
      },
    });
    const res = await response.json();
    if (res) {
      setData(res);
      setMatrix(res.body[0]);
      setOriginal(res.body[1]);
      setOptimal(res.body[2]);
      console.log("data", data);
      console.log("matrix", matrix);
      console.log("original", original);
      console.log("optimal", optimal);
    }
  };
  // useEffect(() => {
  //   submit();
  // }, []);

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
        {optimal.length > 0 && original.length > 0 && matrix.length > 0 ? (
          <OutputAlignment
            optimal={optimal}
            original={original}
            matrix={matrix}
          />
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
}
