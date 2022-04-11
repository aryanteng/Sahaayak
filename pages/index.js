import Head from "next/head";
import Image from "next/image";
import Define from "../components/DefineComponent/Define";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";
import InfoComponent from "../components/InfoComponent";

export default function Home() {
  const list = [
    {
      heading: "Global Alignment",
      desc: "Closely related sequences which are of same length are very much appropriate for global alignment. Here, the alignment is carried out from beginning till end of the sequence to find out the best possible alignment.The Needleman-Wunsch algorithm (A formula or set of steps to solve a problem) was developed by Saul B. Needleman and Christian D. Wunsch in 1970, which is a dynamic programming algorithm for sequence alignment. The dynamic programming solves the original problem by dividing the problem into smaller independent sub problems. These techniques are used in many different aspects of computer science. The algorithm explains global sequence alignment for aligning nucleotide or protein sequences.",
      link: "/global",
    },
    {
      heading: "Local Alignment",
      desc: "Sequences which are suspected to have similarity or even dissimilar sequences can be compared with local alignment method. It finds local regions with high level of similarity.These two methods of alignments are defined by different algorithms, which use scoring matrices to align the two different series of characters or patterns (sequences). The two different alignment methods are mostly defined by Dynamic programming approach for  aligning two different sequences.",
      link: "/local",
    },
    {
      heading: "End Free Alignment",
      desc: "Sequences which are suspected to have similarity or even dissimilar sequences can be compared with local alignment method. It finds local regions with high level of similarity.These two methods of alignments are defined by different algorithms, which use scoring matrices to align the two different series of characters or patterns (sequences). The two different alignment methods are mostly defined by Dynamic programming approach for  aligning two different sequences.",
      link: "/end-free",
    },
  ];
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.infoWrapper}>
        {list.map((item, index) => (
          <InfoComponent
            key={index}
            heading={item.heading}
            desc={item.desc}
            link={item.link}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
