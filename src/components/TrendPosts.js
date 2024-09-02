import TagButtonBlue from "./TagButtonBlue";

const TrendPosts = (props) => {
  const { coverImage, blogTags, title } = props;
  return (
    <div
      className="h-80 w-72 rounded-xl  bg-center p-8 flex flex-col justify-end bg-[#14162466] bg-blend-darken "
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "500px 320px",
      }}
    >
      <div className="w-56 h-[120px] ">
        <TagButtonBlue tag={blogTags[0]} />
        <p className="text-white mt-5">{title}</p>
      </div>
    </div>
  );
};
export default TrendPosts;
