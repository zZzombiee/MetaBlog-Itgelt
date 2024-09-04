import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";

const About = () => {
  return (
    <div className="flex justify-between pt-16 max-w-6xl mx-auto">
      <div>
        <div className="flex flex-col gap-3 w-[280px]">
          <h1 className="text-lg font-bold pb-8">About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="flex flex-col gap-1 mt-6">
          <p>Email: info@jstemplate.net</p>
          <p>Phone: 880 123 456 789</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>Home</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="flex gap-6">
        <Facebook />
        <Twitter />
        <Instagram />
        <LinkedIn />
      </div>
    </div>
  );
};

export default About;
