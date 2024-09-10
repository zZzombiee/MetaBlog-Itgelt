import AllBlogPosts from "@/components/AllBlogPosts";
import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import Link from "next/link";

import { useState } from "react";
import useSWR from "swr";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MainBlogPage = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...Loading</p>;
  }
  if (error) {
    return <div className="max-w-screen-lg mx-auto "></div>;
  }

  const onChangeSlideIndex = (index) => {
    setCurrentSlideIndex(index);
  };
  const blog = blogs[currentSlideIndex];

  return (
    <div>
      <div className="max-w-6xl mx-auto ">
        <div className="hidden md:block">
          <Hero
            id={blog.id}
            coverImage={blog.cover_image}
            tag={blog.tag_list[0]}
            title={blog.title}
            date={blog.published_at}
            set={onChangeSlideIndex}
            index={currentSlideIndex}
            length={blogs.length}
          />
        </div>
        <Trending />
        <AllBlogPosts data={blogs} />
      </div>
    </div>
  );
};

export default MainBlogPage;
