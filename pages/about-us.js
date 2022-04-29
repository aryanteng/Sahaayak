import CreatorCard from "../components/CreatorCard/CreatorCard";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";

export default function AboutUs() {
  const creatorArray = [
    {
      id: 1,
      imgSrc: "https://i.ibb.co/myvq6GR/aryan.jpg",
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
      imgSrc: "https://i.ibb.co/zsxFccd/mohit.jpg",
      name: "Mohit Bansal",
      email: "mohit20526@iiitd.ac.in",
    },
    {
      id: 4,
      imgSrc: "https://i.ibb.co/ZzX7hxD/nik.jpg",
      name: "Nikhil Gupta",
      email: "nikhil20530@iiitd.ac.in",
    },
    {
      id: 5,
      imgSrc: "https://i.ibb.co/4NXnCf2/vishesh.jpg",
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
          As Bioinformatics&rsquo; students ourselves, we faced several
          challenges while trying to find solutions to our problems. We realised
          how difficult it was to find the correct tools for operations such as
          Global, Local &amp; End-Free Alignments, and even some basic tools
          such as DNA to Protein Convertor, and ORF Finder. The websites
          available for these tools are not at all user-friendly and have a
          displeasing user interface. It took us hours to find all the different
          tools and even longer to get the solutions! We found no site on the
          internet providing all these tools at one place. The websites are not
          at all responsive and there is no proper navigation from one tool to
          another. <br />
          <br />
          It was then when we decided to solve this problem by creating an
          all-in-one tool for biology students so that they do not have to face
          the same issues. Our site is easy to use and navigate, has a fun user
          interface, works across multiple devices and screen-widths and is made
          using the latest Web Development Technologies.
        </h3>
      </div>
      <div className={styles.AboutContainer} style={{ marginTop: "2rem" }}>
        <h1>Created By</h1>
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
