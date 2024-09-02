import MetaBlog from "@/pages/icon/MeataBlog";
import { IoIosSearch } from "react-icons/io";

const ApiHeader = () => {
  return (
    <div className="flex justify-between max-w-screen-xl mx-auto py-9">
      <MetaBlog />
      <div className="flex gap-10 justify-center items-center font-normal text-base text-[#3B3C4A]">
        <p>Home</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className=" bg-[#F4F4F5] flex rounded">
        <input
          type="text "
          placeholder="Search"
          className="w-[166px] h-9 rounded bg-[#F4F4F5] p-2"
        />
        <IoIosSearch className="h-full items-center mx-2 w-5" />
      </div>
    </div>
  );
};

export default ApiHeader;
