import Blogs from "@/components/Blogs";
import { IoIosMore } from "react-icons/io";
import { useContext, useState } from "react";
import { DataContext } from "@/components/DataContext";

const getBlogTags = (data) => {
  const tags = [];
  data.forEach((blog) => {
    blog.tag_list.forEach((tag) => {
      const isIncludeTag = tags.includes(tag);
      if (isIncludeTag === false) {
        tags.push(tag);
      }
    });
  });

  return tags;
};
const AllBlogPostsPage = () => {
  const data = useContext(DataContext);

  const [currentPostIndex, setCurrentPostIndex] = useState(12);
  const [selectedTag, setSelectedTag] = useState("");

  const tags = getBlogTags(data);

  const handleSelectTag = (tag) => {
    setSelectedTag(tag);
  };

  const filteredBlogs = data.filter((blog) => {
    if (selectedTag === "") {
      return true;
    }
    return blog.tag_list.includes(selectedTag);
  });
  console.log(selectedTag);

  const slicedBlogs = filteredBlogs.slice(0, currentPostIndex);

  return (
    <div className="max-w-screen-xl mx-auto mt-12">
      <h1 className="text-3xl font-bold px-4 pb-8">All Blog Post</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 max-w-screen-xl mx-auto grid-cols-1">
        {slicedBlogs.map((blog) => {
          return (
            <Blogs
              data={blog}
              key={blog.id}
              coverImage={blog.cover_image}
              blogTags={blog.tag_list}
              title={blog.title}
              date={blog.published_at}
              userName={blog.user.username}
              profileImage={blog.user.profile_image_90}
            />
          );
        })}
      </div>
      <div className="w-full flex justify-center">
        <button
          className="border border-solid my-[50px] md:my-[100px] px-4 py-2 rounded"
          onClick={() => {
            setCurrentPostIndex(currentPostIndex + 9);
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
export default AllBlogPostsPage;
