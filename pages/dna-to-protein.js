import { useState } from "react";
import Define from "../components/DefineComponent/Define";
import InputDNA from "../components/DnaComponents/InputDNA";
import OutputDNA from "../components/DnaComponents/InputDNA/OutputDNA";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Global.module.css";

export default function DNA_To_Protein() {
  const topic = "DNA To Protein ";
  const definition =
    "Under the assumption that both input sequences a and  b stem from the same origin, a global alignment tries to identify matching parts and the changes needed to transfer one sequence into the other.";
  const link = "https://vlab.amrita.edu/?sub=3&brch=274&sim=1431&cnt=1";
  const [seq, setSeq] = useState("");
  const [output, setOutput] = useState([]);
  const [error, setError] = useState("");
  const nucleotides = ["A", "T", "C", "G"];
  const submit = async () => {
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
        {output.length > 0 && error.length <= 1 && (
          <OutputDNA output={output} />
        )}
      </div>
      <Footer />
    </>
  );
}
