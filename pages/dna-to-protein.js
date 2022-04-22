import { useState } from "react";
import Define from "../components/DefineComponent/Define";
import InputDNA from "../components/DnaComponents/InputDNA";
import OutputDNA from "../components/DnaComponents/InputDNA/OutputDNA";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import getProtein from "../functions/protein";
import styles from "../styles/Global.module.css";

export default function DNA_To_Protein() {
  const topic = "DNA To Protein ";
  const definition =
    "Under the assumption that both input sequences a and  b stem from the same origin, a global alignment tries to identify matching parts and the changes needed to transfer one sequence into the other.";
  const link = "https://vlab.amrita.edu/?sub=3&brch=274&sim=1431&cnt=1";

  const [seq, setSeq] = useState("");

  const submit = () => {
    console.log("seq", seq);
    var ans = getProtein(seq);
    console.log("ans", ans);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Define topic={topic} definition={definition} link={link} />
        <InputDNA seq={seq} setSeq={setSeq} submit={submit} />
        <OutputDNA />
      </div>
      <Footer />
    </>
  );
}
