import MetaBlog from "@/components/icons/MeataBlog";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between max-w-[1152px] mx-auto py-9">
      <Link href={"/"}>
        <MetaBlog />
      </Link>
      <div className="hidden gap-10 justify-center items-center font-normal text-base text-[#3B3C4A] md:flex">
        <Link href={"/"}>
          <p>Home</p>
        </Link>
        <Link href={"/allBlogPostPage"}>
          <p>Blog</p>
        </Link>
        <Link href={"contactUs"}>
          <p>Contact</p>
        </Link>
      </div>
      <label className=" hidden input bg-gray-100 md:flex items-center gap-2 h-9">
        <input type="text " placeholder="Search" className="w-32" />
        <button>
          <IoIosSearch className="h-full items-center w-5" />
        </button>
      </label>
    </div>
  );
};

export default Header;
