import { useState } from "react";
import Define from "../components/DefineComponent/Define";
import InputDNA from "../components/DnaComponents/InputDNA";
import OutputDNA from "../components/DnaComponents/InputDNA/OutputDNA";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loading from "../components/Loading";
import styles from "../styles/Global.module.css";

export default function DNA_To_Protein() {
  const topic = "DNA To Protein ";
  const definition =
    "In molecular biology, open reading frames (ORFs) are defined as spans of DNA sequence between the start and stop codons. Usually, this is considered within a studied region of a prokaryotic DNA sequence.";
  const link = "https://en.wikipedia.org/wiki/Open_reading_frame";
  const [seq, setSeq] = useState("");
  const [output, setOutput] = useState([]);
  const [error, setError] = useState("");
  const nucleotides = ["A", "T", "C", "G"];
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    setIsLoading(true);
    const response = await fetch(
      "http://avivashishta2907.pythonanywhere.com/dna-to-protein/",
      {
        // Adding method type
        method: "POST",
        // Adding body or contents to send
        body: JSON.stringify({
          dna: seq,
        }),
        // Adding headers to the request
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const res = await response.json();
    if (res) {
      if (error.length > 0) {
        setError("");
      }
      setOutput(res.body);
      setIsLoading(false);
      console.log("dna-protein", res.body);
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
          submit={submit}
          output={output}
          setOutput={setOutput}
          error={error}
        />
        {isLoading ? (
          <Loading />
        ) : (
          output.length > 0 &&
          error.length <= 1 && <OutputDNA output={output} />
        )}
      </div>
      <Footer />
    </>
  );
}
