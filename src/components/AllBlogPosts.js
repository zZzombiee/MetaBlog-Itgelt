import Blogs from "@/components/Blogs";
import { useState } from "react";
import { IoIosMore } from "react-icons/io";

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

const AllBlogPosts = (props) => {
  const { data } = props;

  const [currentPostIndex, setCurrentPostIndex] = useState(9);
  const [tagCount, setTagCount] = useState(5);
  const [selectedTag, setSelectedTag] = useState("");
  const [changeTagCountText, setChangeTagCountText] = useState("view all");

  const tags = getBlogTags(data);

  const handleSelectTag = (tag) => {
    setSelectedTag(tag);
  };

  const changeTagCounts = () => {
    if (tagCount === 5) setTagCount(tags.length);
    else setTagCount(5);
  };

  const filteredBlogs = data.filter((blog) => {
    if (selectedTag === "") {
      return true;
    }
    return blog.tag_list.includes(selectedTag);
  });

  const currentTagCount = () => {
    if (changeTagCountText === "view all") setChangeTagCountText("show less");
    else {
      setChangeTagCountText("view all");
    }
  };

  const onClickShowTag = () => {
    currentTagCount();
    changeTagCounts();
  };

  const slicedBlogs = filteredBlogs.slice(0, currentPostIndex);
  const showTags = tags.slice(0, tagCount);
  return (
    <div>
      <h1 className="text-3xl font-bold">All Blog Post</h1>
      <div className="flex justify-between">
        <div className="flex gap-5 py-8 items-center flex-wrap w-[1000px]">
          <p
            className="cursor-pointer text-yellow-500"
            onClick={() => {
              handleSelectTag("");
            }}
          >
            All
          </p>
          {showTags.map((tag, index) => {
            return (
              <div key={index}>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    handleSelectTag(tag);
                  }}
                >
                  {tag}
                </p>
              </div>
            );
          })}
          <IoIosMore className="xl:hidden " />
        </div>
        <p
          className="flex gap-5 py-8 cursor-pointer font-semibold items-center"
          onClick={onClickShowTag}
        >
          {changeTagCountText}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-screen-xl mx-auto">
        {slicedBlogs.map((blog) => {
          return (
            <Blogs
              data={blog}
              key={blog.id}
              coverImage={blog.cover_image}
              blogTags={blog.tag_list}
              title={blog.title}
              date={blog.published_at}
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
export default AllBlogPosts;
