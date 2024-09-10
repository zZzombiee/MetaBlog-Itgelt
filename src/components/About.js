import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex justify-center md:justify-between pt-16 md:max-w-6xl mx-auto  w-fit md:flex-row flex-col md:items-start items-center gap-4 md:w-full">
      <div className="hidden md:flex flex-col">
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
      <div className="flex flex-col gap-2 w-fit">
        <Link href={"/"}>
          <p className="w-fit">Home</p>
        </Link>
        <Link href={"/allBlogPostPage"}>
          <p className="w-fit">Blog</p>
        </Link>
        <Link href={"contactUs"}>
          <p className="w-fit">Contact</p>
        </Link>
      </div>
      <div className="flex gap-6 w-fit">
        <Facebook />
        <Twitter />
        <Instagram />
        <LinkedIn />
      </div>
    </div>
  );
};

export default About;
