import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="h-screen flex flex-col justify-between px-4">
      <div>
        <Header />
        {children}
      </div>
      <div className="bg-gray-100">
        <About />
        <Footer />
      </div>
    </div>
  );
};
export default Layout;

// className={`${dark === "dark" ? "/" : ""}`}
