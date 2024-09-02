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
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (isLoading) {
    return <p>...Loading</p>;
  }
  if (error) {
    return <p>ERROR</p>;
  }
  console.log(data);
  return (
    <div className="max-w-6xl mx-auto ">
      <ApiHeader />
      {data.map((datas, index) => {
        const [count, setCount] = useState(index);
        return (
          <Hero
            coverImage={data[count].cover_image}
            tag={datas.tag_list[0]}
            title={datas.title}
            date={datas.published_at}
          />
        );
      })}
      <Trending datas={data} />
      <AllBlogPosts data={data} />
      <div className="bg-gray-100 w-full">
        <About className="bg-gray-100" />
        <Footer />
      </div>
    </div>
  );
};

export default MainBlogPage;
