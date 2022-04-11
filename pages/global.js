import Head from "next/head";
import Image from "next/image";
import Define from "../components/DefineComponent/Define";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Global.module.css";

export default function Global() {
  return (
    <div className={styles.container}>
      <Header />
      <Define />
      <Footer />
    </div>
  );
}
