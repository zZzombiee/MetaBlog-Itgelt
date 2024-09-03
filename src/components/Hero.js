import moment from "moment";
import Dates from "./Dates";
import TagButtonBlue from "./TagButtonBlue";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Hero = (props) => {
  const { coverImage, tag, title, date, set, index, lenght } = props;

  const prevSlide = () => {
    if (index === 0) {
      return;
    }

    set(index - 1);
  };

  return (
    <div className="my-28">
      <div
        className="h-[600px] w-full rounded-xl flex items-end p-4 "
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white w-[598px] h-fill rounded-xl p-10 flex justify-between flex-col ">
          <div>
            <TagButtonBlue tag={tag} className="items-end" />
            <h1 className="text-4xl font-semibold mt-4 ">{title}</h1>
          </div>
          <div className="mt-6">
            <Dates date={moment(date).format("LL")} />
          </div>
        </div>
      </div>
      <div className="mt-3  w-full mx-auto flex justify-end">
        <button className="border border-solid rounded">
          <IoIosArrowBack className="w-[40px] h-[40px]" onClick={prevSlide} />
        </button>
        <button className="border border-solid rounded">
          <IoIosArrowForward
            className="w-[40px] h-[40px]"
            onClick={() => {
              set(index + 1);
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Hero;
