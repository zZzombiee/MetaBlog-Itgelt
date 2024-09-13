import AllBlogPosts from "@/components/AllBlogPosts";
import Hero from "@/components/Hero";
import { DataContext } from "@/components/DataContext";
import Trending from "@/components/Trending";
import { useContext, useState } from "react";

const MainBlogPage = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const blogs = useContext(DataContext);

  const onChangeSlideIndex = (index) => {
    if (index === filteredBlog.length) {
      setCurrentSlideIndex(0);
    } else if (index < 0) {
      setCurrentSlideIndex(filteredBlog.length - 1);
    } else setCurrentSlideIndex(index);
  };
  const filteredBlog = [];
  blogs.forEach((blog) => {
    if (blog.cover_image !== null) filteredBlog.push(blog);
    return false;
  });

  const blog = filteredBlog[currentSlideIndex];

  return (
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
  );
};

export default MainBlogPage;
