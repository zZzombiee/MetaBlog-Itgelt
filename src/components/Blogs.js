import Link from "next/link";
import Dates from "./Dates";
import TagButton from "./TagButton";
import moment from "moment";

const Blogs = (props) => {
  const { coverImage, blogTags, title, date, data } = props;

  return (
    <div className="border border-solid px-4 py-2 m-2 rounded flex flex-col gap-4">
      <Link href={`page/${data.id}`}>
        <img src={coverImage} className="h-60 w-[360px] rounded" />
      </Link>
      <div className="flex flex-col gap-5">
        <div className="">
          <div className="flex gap-2 flex-wrap ">
            {blogTags.map((tag, index) => {
              return (
                <div key={index}>
                  <TagButton tag={tag} />
                </div>
              );
            })}
          </div>
          <p className="font-semibold text-2xl">{title}</p>
        </div>
        <Dates date={moment(date).format("LL")} />
      </div>
    </div>
  );
};
export default Blogs;
