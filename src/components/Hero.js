import moment from "moment";
import Dates from "./Dates";
import TagButtonBlue from "./TagButtonBlue";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Hero = (props) => {
  const { coverImage, tag, title, date } = props;
  return (
    <div className="my-28">
      <div className="h-[600px] w-full">
        <img
          src={coverImage}
          className="rounded-xl w-[1216px]  absolute h-[600px]"
        />
        <div className="bg-white w-[598px] h-[252px] relative rounded-xl bottom-1 left-6 top-80 p-10 flex justify-between flex-col">
          <div>
            <TagButtonBlue tag={tag} className="items-end" />
            <h1 className="text-4xl font-semibold mt-4 ">{title}</h1>
          </div>
          <div className="mt-6">
            <Dates date={moment(date).format("LL")} />
          </div>
        </div>
      </div>
      <div className="mt-3  w-[1216px] mx-auto flex justify-end">
        <button className="border border-solid rounded">
          <IoIosArrowBack className="w-[40px] h-[40px]" />
        </button>
        <button className="border border-solid rounded">
          <IoIosArrowForward className="w-[40px] h-[40px]" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
