import ApiHeader from "@/components/ApiHeader";
import AllBlogPosts from "@/components/AllBlogPosts";
import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import About from "@/components/About";
import Footer from "@/components/Footer";

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
    return <p>ERROR</p>;
  }

  const onChangeSlideIndex = (index) => {
    setCurrentSlideIndex(index);
  };
  // console.log(blogs.lenght);
  return (
    <div className="max-w-6xl mx-auto ">
      <ApiHeader />
      {blogs.map((blog, index) => {
        if (index === currentSlideIndex) {
          return (
            <Hero
              key={index}
              coverImage={blog.cover_image}
              tag={blog.tag_list[0]}
              title={blog.title}
              date={blog.published_at}
              set={onChangeSlideIndex}
              index={currentSlideIndex}
            />
          );
        }
      })}
      <Trending datas={blogs} />
      <AllBlogPosts data={blogs} />
      <div className="bg-gray-100 w-full">
        <About className="bg-gray-100" />
        <Footer />
      </div>
    </div>
  );
};

export default MainBlogPage;
