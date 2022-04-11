import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Footer />
    </div>
  );
}
