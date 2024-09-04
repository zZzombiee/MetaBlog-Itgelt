import Header from "@/components/Header";
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
  // tags.map((tag, index) => {
  //   console.log(tag.name);
  // });
  const blog = blogs[currentSlideIndex];

  return (
    <div>
      <div className="max-w-6xl mx-auto ">
        <Header />
        <div className="hidden md:block">
          <Hero
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
      <div className="bg-gray-100 ">
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default MainBlogPage;
