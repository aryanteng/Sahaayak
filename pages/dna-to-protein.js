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
  return (
    <div className={styles.container}>
      <Header />
      <Define topic={topic} definition={definition} link={link} />
      <InputDNA />
      <OutputDNA />
      <Footer />
    </div>
  );
}
