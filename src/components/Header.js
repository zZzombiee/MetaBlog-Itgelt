import MetaBlog from "@/components/icons/MetaBlog";
import MeataBlog from "@/components/icons/MeataBlog";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-between max-w-[1152px] mx-auto py-9 items-center">
      <Link href={"/"}>
        <MeataBlog />
      </Link>
      <div className="hidden gap-10 justify-center items-center font-normal text-base text-[#3B3C4A] md:flex ">
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
      <label className="hidden input bg-gray-100 md:flex items-center gap-2 h-9">
        <input type="text " placeholder="Search" className="w-32" />
        <button>
          <IoIosSearch className="h-full items-center w-5" />
        </button>
      </label>

      <div className="drawer drawer-end w-fit md:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4">
            <IoMenu className="h-8 w-8 " />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-white text-base-content min-h-full h-screen w-80 p-6 pt-10 flex justify-between">
            <div className=" flex gap-3 flex-col">
              <li>
                <label className="input bg-gray-100 flex items-center gap-2 h-9">
                  <input type="text " placeholder="Search" className="w-full" />
                  <button>
                    <IoIosSearch className="h-full items-center w-5" />
                  </button>
                </label>
              </li>
              <li>
                <Link href={"/"}>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href={"/allBlogPostPage"}>
                  <p>Blog</p>
                </Link>
              </li>
              <li className="border-b border-solid pb-2">
                <Link href={"contactUs"}>
                  <p>Contact</p>
                </Link>
              </li>
              <li>
                <div className="flex justify-between">
                  <p className="text-gray-600">Change Theme</p>
                  <input
                    type="checkbox"
                    value="coffee"
                    className="toggle theme-controller"
                  />
                </div>
              </li>
            </div>
            <li className="flex justify-end">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
