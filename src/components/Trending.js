import { useState } from "react";
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

  const [currentTrendPost, setCurrentTrendPost] = useState(4);

  const currentPostCount = blogs.slice(0, currentTrendPost);

  return (
    <div className="my-[100px]">
      <h1 className="text-3xl font-bold pb-8">Trending</h1>
      <div className="flex gap-5 ">
        {currentPostCount.map((blog, index) => {
          return (
            <TrendPosts
              key={blog.id}
              data={blog}
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
