import { useState, useEffect } from "react";
import Define from "../components/DefineComponent/Define";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InputAlignment from "../components/InputAlignment/InputAlignment";
import Loading from "../components/Loading";
import OutputAlignment from "../components/OutputAlignment/OutputAlignment";
import styles from "../styles/Global.module.css";

export default function EndFree() {
  const topic = "End-Free Alignment";
  const definition =
    "Under the assumption that both input sequences a and  b stem from the same origin, a global alignment tries to identify matching parts and the changes needed to transfer one sequence into the other.";
  const link = "https://vlab.amrita.edu/?sub=3&brch=274&sim=1431&cnt=1";
  const [data, setData] = useState([{}]);
  const [seqA, setSeqA] = useState("");
  const [seqB, setSeqB] = useState("");
  const [gap, setGap] = useState("-2");
  const [match, setMatch] = useState("1");
  const [misMatch, setMisMatch] = useState("-1");
  const [matrix, setMatrix] = useState([]);
  const [original, setOriginal] = useState([]);
  const [optimal, setOptimal] = useState([]);
  const [maxScore, setMaxScore] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const submit = async () => {
    setIsLoading(true);
    if (seqA.length == 0 && seqB.length == 0) {
      setError("Error: Sequences cannot be empty!");
    } else if (seqA.length == 0) {
      setError("Error: Sequence A cannot be empty!");
    } else if (seqB.length == 0) {
      setError("Error: Sequence B cannot be empty!");
    } else if (!match && !gap && !misMatch) {
      setError("Error: Please input your scores!");
    } else if (!match) {
      setError("Error: Match score cannot be empty!");
    } else if (!parseInt(match)) {
      setError("Error: Match value has to be an integer!");
    } else if (!gap) {
      setError("Error: Gap penalty cannot be empty!");
    } else if (!parseInt(gap)) {
      setError("Error: Gap value has to be an integer!");
    } else if (!misMatch) {
      setError("Error: Mismatch penalty cannot be empty!");
    } else if (!parseInt(misMatch)) {
      setError("Error: Mismatch value has to be an integer!");
    } else {
      setError("");
      const response = await fetch(
        "http://avivashishta2907.pythonanywhere.com/end-free/",
        {
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
        }
      );
      const res = await response.json();
      if (res) {
        setData(res);
        setMatrix(res.body[0]);
        setOriginal(res.body[1]);
        setOptimal(res.body[2]);
        setMaxScore(res.body[3]);
        console.log("data", data);
        console.log("matrix", matrix);
        console.log("original", original);
        console.log("optimal", optimal);
        console.log("max score", maxScore);
        setIsLoading(false);
      }
    }
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
          error={error}
        />
        {isLoading && !error ? (
          <Loading />
        ) : optimal?.length > 0 && original.length > 0 && matrix.length > 0 ? (
          <OutputAlignment
            isGlobal={true}
            optimal={optimal}
            original={original}
            matrix={matrix}
            maxScore={maxScore}
            seqA={seqA}
            seqB={seqB}
          />
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
}
