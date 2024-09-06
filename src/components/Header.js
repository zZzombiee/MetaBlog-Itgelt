import MetaBlog from "@/components/icons/MeataBlog";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between max-w-[1152px] mx-auto py-9">
      <Link href={"/"}>
        <MetaBlog />
      </Link>
      <div className="flex gap-10 justify-center items-center font-normal text-base text-[#3B3C4A]">
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
      <div className=" bg-[#F4F4F5] flex rounded">
        <input
          type="text "
          placeholder="Search"
          className="w-[166px] h-9 rounded bg-[#F4F4F5] p-2"
        />
        <button>
          <IoIosSearch className="h-full items-center mx-2 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Header;
