import Link from "next/link";
import TagButtonBlue from "./TagButtonBlue";

const TrendPosts = (props) => {
  const { coverImage, blogTags, title, data } = props;
  return (
    <Link href={`page/${data.id}`}>
      <div
        className="h-80 w-72 rounded-xl  bg-center p-8 flex flex-col justify-end bg-[#14162466] bg-blend-darken "
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: "500px 320px",
        }}
      >
        <div className=" h-[120px] ">
          <TagButtonBlue tag={blogTags[0]} />
          <p className="text-white mt-5">{title}</p>
        </div>
      </div>
    </Link>
  );
};
export default TrendPosts;
