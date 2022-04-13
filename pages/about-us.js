import CreatorCard from "../components/CreatorCard/CreatorCard";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";

export default function AboutUs() {
  const creatorArray = [
    {
      id: 1,
      imgSrc: "assets/DPs/Aryan.svg",
      name: "Aryan Teng",
      email: "aryan20499@iiitd.ac.in",
    },
    {
      id: 2,
      imgSrc: "https://i.ibb.co/Bswp8RS/avi.jpg",
      name: "Avi Vashishta",
      email: "avi20500@iiitd.ac.in",
    },
    {
      id: 3,
      imgSrc: "assets/DPs/Mohit.svg",
      name: "Mohit Bansal",
      email: "mohit20526@iiitd.ac.in",
    },
    {
      id: 4,
      imgSrc: "assets/DPs/Nikhil.svg",
      name: "Nikhil Gupta",
      email: "nikhil20530@iiitd.ac.in",
    },
    {
      id: 5,
      imgSrc: "assets/DPs/Vishesh.svg",
      name: "Vishesh Jain",
      email: "vishesh20550@iiitd.ac.in",
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.AboutContainer}>
        <h1>About The Project</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h3>
      </div>
      <div className={styles.AboutContainer} style={{ marginTop: "2rem" }}>
        <h1>The Creators</h1>
        {creatorArray.map((item) => {
          return (
            <CreatorCard
              key={item.id}
              imgSrc={item.imgSrc}
              name={item.name}
              email={item.email}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
