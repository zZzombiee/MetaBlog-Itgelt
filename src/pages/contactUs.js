import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactUs = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Header />
        <Contact />
      </div>
      <div className="bg-gray-100">
        <About />
        <Footer />
      </div>
    </div>
  );
};
export default ContactUs;
