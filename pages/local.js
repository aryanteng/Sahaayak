import Define from "../components/DefineComponent/Define";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Global.module.css";
import InputAlignment from "../components/InputAlignment/InputAlignment";
import OutputAlignment from "../components/OutputAlignment/OutputAlignment";
import { useState } from "react";

export default function Local() {
  const [data, setData] = useState([{}]);
  const topic = "Local Alignment";
  const definition =
    "Sequences which are suspected to have similarity or even dissimilar sequences can be compared with local alignment method. It finds local regions with high level of similarity.These two methods of alignments are defined by different algorithms, which use scoring matrices to align the two different series of characters or patterns (sequences). The two different alignment methods are mostly defined by Dynamic programming approach for  aligning two different sequences.";
  const link = "https://vlab.amrita.edu/?sub=3&brch=274&sim=1433&cnt=1";
  const [seqA, setSeqA] = useState("");
  const [seqB, setSeqB] = useState("");
  const [gap, setGap] = useState("");
  const [match, setMatch] = useState("");
  const [misMatch, setMisMatch] = useState("");
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
    } else if (!match) {
      setError("Error: Match score cannot be empty!");
    } else if (!gap) {
      setError("Error: Gap penalty cannot be empty!");
    } else if (!misMatch) {
      setError("Error: Mismatch penalty cannot be empty!");
    } else if (!parseInt(match)) {
      setError("Error: Match value has to be an integer!");
    } else if (!parseInt(gap)) {
      setError("Error: Gap value has to be an integer!");
    } else if (!parseInt(misMatch)) {
      setError("Error: Mismatch value has to be an integer!");
    } else {
      const response = await fetch(
        "http://avivashishta2907.pythonanywhere.com/local/",
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
        {isLoading ? (
          <Loading />
        ) : optimal.length > 0 && original.length > 0 && matrix.length > 0 ? (
          <OutputAlignment
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
