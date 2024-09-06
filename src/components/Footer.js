import MetaBlog from "./icons/MetaBlog";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t border-solid border-gray-300 py-5 mt-6 flex justify-between mx-auto max-w-6xl">
      <div className="flex gap-3">
        <Link href={"/"}>
          <MetaBlog />
        </Link>
        <div>
          <div className="flex">
            <p className="text-xl">Meta</p>
            <p className="text-xl font-extrabold">Blog</p>
          </div>
          <div className="">© All Rights Reserved.</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="border-r border-solid pr-4">Terms of Use</p>
        <p className="border-r border-solid pr-4">Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
    </div>
  );
};

export default Footer;
