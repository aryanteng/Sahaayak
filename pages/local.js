import Define from "../components/DefineComponent/Define";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Global.module.css";
import InputAlignment from "../components/InputAlignment/InputAlignment";
import OutputAlignment from "../components/OutputAlignment/OutputAlignment";

export default function Local() {
  const topic = "Local Alignment";
  const definition =
    "Sequences which are suspected to have similarity or even dissimilar sequences can be compared with local alignment method. It finds local regions with high level of similarity.These two methods of alignments are defined by different algorithms, which use scoring matrices to align the two different series of characters or patterns (sequences). The two different alignment methods are mostly defined by Dynamic programming approach for  aligning two different sequences.";
  const link = "https://vlab.amrita.edu/?sub=3&brch=274&sim=1433&cnt=1";
  return (
    <div className={styles.container}>
      <Header />
      <Define topic={topic} definition={definition} link={link} />
      <InputAlignment />
      <OutputAlignment />
      <Footer />
    </div>
  );
}
