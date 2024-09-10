import { useState } from "react";
import TrendPosts from "./TrendPosts";
import useSWR from "swr";

const url = "https://dev.to/api/articles?state=rising";

const Trending = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);
  const [currentTrendPost, setCurrentTrendPost] = useState(4);

  if (isLoading) {
    return <p>...Loading</p>;
  }
  if (error) {
    return <p>ERROR</p>;
  }

  const currentPostCount = blogs.slice(0, currentTrendPost);

  return (
    <div className="my-[100px]">
      <h1 className="text-3xl font-bold pb-8">Trending</h1>
      <div className="flex gap-5  lg:overflow-scroll">
        {currentPostCount.map((blog, index) => {
          return (
            <div className="w-1/4">
              <TrendPosts
                key={blog.id}
                data={blog}
                coverImage={blog.cover_image}
                blogTags={blog.tag_list}
                title={blog.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Trending;
