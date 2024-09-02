import TrendPosts from "./TrendPosts";

const Trending = (props) => {
  const { datas } = props;
  return (
    <div className="my-[100px]">
      <h1 className="text-3xl font-bold pb-8">Trending</h1>
      <div className="flex gap-5 ">
        {datas.map((data, index) => {
          if (index < 4)
            return (
              <TrendPosts
                key={data.id}
                coverImage={data.cover_image}
                blogTags={data.tag_list}
                title={data.title}
              />
            );
        })}
      </div>
    </div>
  );
};
export default Trending;
