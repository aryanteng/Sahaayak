import { useState, useEffect } from "react";
import Define from "../components/DefineComponent/Define";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InputAlignment from "../components/InputAlignment/InputAlignment";
import OutputAlignment from "../components/OutputAlignment/OutputAlignment";
import styles from "../styles/Global.module.css";

export default function Global() {
  const [data, setData] = useState([{}]);

  // const getData = async () => {
  //   const response = await fetch("http://localhost:5000/members", {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //     },
  //   });

  //   const res = response.json();
  //   console.log(res);
  // };

  useEffect(() => {
    fetch("https://localhost:5000/members", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
    })
      .then((res) => {
        if (res.ok) {
          console.log("Works");
        }
        // res.json())
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch(function (err) {
        console.log("Error");
      });
    // getData();
  }, []);

  const topic = "Global Alignment";
  const definition =
    "Under the assumption that both input sequences a and  b stem from the same origin, a global alignment tries to identify matching parts and the changes needed to transfer one sequence into the other.";
  const link = "https://vlab.amrita.edu/?sub=3&brch=274&sim=1431&cnt=1";
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
