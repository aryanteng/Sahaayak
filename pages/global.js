import Define from "../components/DefineComponent/Define";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InputAlignment from "../components/InputAlignment/InputAlignment";
import OutputAlignment from "../components/OutputAlignment/OutputAlignment";
import styles from "../styles/Global.module.css";

export default function Global() {
  const topic = "Global Alignment";
  const definition =
    "Under the assumption that both input sequences a and  b stem from the same origin, a global alignment tries to identify matching parts and the changes needed to transfer one sequence into the other.";
  const link = "https://vlab.amrita.edu/?sub=3&brch=274&sim=1431&cnt=1";
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Define topic={topic} definition={definition} link={link} />
        <InputAlignment />
        <OutputAlignment />
      </div>
      <Footer />
    </>
  );
}
