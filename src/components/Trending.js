import TrendPosts from "./TrendPosts";
import useSWR from "swr";

const url = "https://dev.to/api/articles?state=rising";

const Trending = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);
  if (isLoading) {
    return <p>...Loading</p>;
  }
  if (error) {
    return <p>ERROR</p>;
  }
  return (
    <div className="my-[100px] ">
      <h1 className="text-3xl font-bold pb-8">Trending</h1>
      <div className="flex gap-5 ">
        {blogs.map((blog, index) => {
          if (index < 4)
            return (
              <TrendPosts
                key={blog.id}
                coverImage={blog.cover_image}
                blogTags={blog.tag_list}
                title={blog.title}
              />
            );
        })}
      </div>
    </div>
  );
};
export default Trending;
