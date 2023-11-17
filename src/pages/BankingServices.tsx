import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/banking-services/Hero";
import Services from "../components/banking-services/Services";

type Props = {};

const BankingServices = (props: Props) => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* hero */}
      <Hero />
      {/* Services */}
      <Services />
      {/* footer */}
      <Footer />
    </>
  );
};

export default BankingServices;
