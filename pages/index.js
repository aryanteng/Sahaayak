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
      desc: "Closely related sequences which are of same length are very much appropriate for global alignment. Here, the alignment is carried out from beginning till end of the sequence to find out the best possible alignment.The Needleman-Wunsch algorithm (A formula or set of steps to solve a problem) was developed by Saul B. Needleman and Christian D. <br/> <br/> Wunsch in 1970, which is a dynamic programming algorithm for sequence alignment. The dynamic programming solves the original problem by dividing the problem into smaller independent sub problems. These techniques are used in many different aspects of computer science. The algorithm explains global sequence alignment for aligning nucleotide or protein sequences.",
      link: "/global",
    },
    {
      heading: "Local Alignment",
      desc: "Sequences which are suspected to have similarity or even dissimilar sequences can be compared with local alignment method. It finds local regions with high level of similarity. This requires a special dynamic programming algorithm known as the  Smith–Waterman algorithm, which use scoring matrices to align the two different series of characters or patterns(sequences).",
      link: "/local",
    },
    {
      heading: "End Free Alignment",
      desc: "The central dogma of molecular biology explains the flow of genetic information, from DNA to RNA, to make a functional product, a protein.<br/> <br/>The central dogma suggests that DNA contains the information needed to make all of our proteins, and that RNA is a messenger that carries this information to the ribosomes.The ribosomes serve as factories in the cell where the information is ‘translated’ from a code into the functional product. The nucleotide sequence encoding a polypeptide from its start codon to its stop codon, is referred as CoDing Sequence(CDS) pending on the biological system (eukaryote or prokaryote) translation mechanistic is slightly different. <br/> <br/>This needs to be considered when designing gene expression vectors.The process by which the DNA instructions are converted into the functional product is called gene expression.",
      link: "/end-free",
    },
    {
      heading: "Converting DNA to Protein",
      desc: "The central dogma of molecular biology explains the flow of genetic information, from DNA to RNA, to make a functional product, a protein.<br/> <br/>The central dogma suggests that DNA contains the information needed to make all of our proteins, and that RNA is a messenger that carries this information to the ribosomes.The ribosomes serve as factories in the cell where the information is ‘translated’ from a code into the functional product. The nucleotide sequence encoding a polypeptide from its start codon to its stop codon, is referred as CoDing Sequence(CDS) pending on the biological system (eukaryote or prokaryote) translation mechanistic is slightly different. <br/> <br/>This needs to be considered when designing gene expression vectors.The process by which the DNA instructions are converted into the functional product is called gene expression.",
      link: "/dna-to-protein",
    },
    {
      heading: "ORFs",
      desc: "An open reading frame is a portion of a DNA molecule that, when translated into amino acids, contains no stop codons.<br/><br/> The genetic code reads DNA sequences in groups of three base pairs, which means that a double-stranded DNA molecule can read in any of six possible reading frames--three in the forward direction and three in the reverse. A long open reading frame is likely part of a gene.",
      link: "/orfs",
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.container}>
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
      </div>
      <Footer />
    </>
  );
}
