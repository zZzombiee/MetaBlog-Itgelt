import Link from "next/link";
import Dates from "./Dates";
import TagButton from "./TagButton";
import moment from "moment";

const Blogs = (props) => {
  const { coverImage, blogTags, title, date, data, profileImage, userName } =
    props;

  return (
    <Link href={`page/${data.id}`}>
      <div className="border border-solid px-4 py-2 m-2 rounded flex flex-col gap-4">
        <img src={coverImage} className="h-60 w-[360px] rounded" />
        <div className="flex flex-col ">
          <div className="">
            <div className="flex gap-2 flex-wrap max-h-7 overflow-hidden">
              {blogTags.map((tag, index) => {
                return (
                  <div key={index}>
                    <TagButton tag={tag} />
                  </div>
                );
              })}
            </div>
            <p className="font-semibold text-2xl h-16 overflow-clip">{title}</p>
          </div>
          <div className="flex gap-5 py-6 items-center">
            <User userName={userName} profileImage={profileImage} />
            <Dates date={moment(date).format("LL")} />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Blogs;

const User = (props) => {
  const { profileImage, userName } = props;
  if (profileImage == null) {
    return null;
  } else {
    return (
      <div className="flex gap-2 items-center ">
        <img src={profileImage} className="w-9 h-9 rounded-full" />
        <p className="text-[#97989F]">{userName}</p>
      </div>
    );
  }
};
