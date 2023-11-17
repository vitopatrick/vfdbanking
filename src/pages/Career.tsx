import CareersExplained from "../components/career-hero/CareersExplained";
import Hero from "../components/career-hero/Hero";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

type Props = {};

const Career = (props: Props) => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* about careers */}
      <CareersExplained />
      {/* footer */}
      <Footer />
    </>
  );
};

export default Career;
