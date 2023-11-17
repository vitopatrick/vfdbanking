import ContactForm from "../components/contact-form/ContactForm";
import ContactHero from "../components/contact-hero/ContactHero";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      {/* Navigation */}
      <Navbar />
      {/* contact hero */}
      <ContactHero />
      {/* Contact Form */}
      <ContactForm />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;
