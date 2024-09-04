import Blogs from "@/components/Blogs";
import { useState } from "react";
import { IoIosMore } from "react-icons/io";
import useSWR from "swr";
import TagBlogPosts from "./TagBlogPosts";

const url = "https://dev.to/api/tags";

const AllBlogPosts = (props) => {
  const { data } = props;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: tags, error, isLoading } = useSWR(url, fetcher);

  const [currentPostIndex, setCurrentPostIndex] = useState(9);
  const [tagCount, setTagCount] = useState(5);

  if (isLoading) {
    return <p>...Loading</p>;
  }
  if (error) {
    return <p>ERROR</p>;
  }
  const tagData = (tag) => {
    let myArr = [];
    data.map((blog, index) => {
      blog.tag_list.map((tags) => {
        if (tags === tag) {
          myArr.push(blog);
        }
      });
    });
    return console.log(myArr);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">All Blog Post</h1>
      <div className="flex justify-between">
        <div className="flex gap-5 py-8 items-center">
          <p className="cursor-pointer">All</p>
          {tags.map((tag, index) => {
            if (index < tagCount)
              return (
                <div key={tag.id}>
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      tagData(tag.name);
                    }}
                  >
                    {tag.name}
                  </p>
                </div>
              );
          })}
          <IoIosMore className="xl:hidden " />
        </div>
        <p
          className="flex gap-5 py-8 cursor-pointer"
          onClick={() => {
            setTagCount(tags.length);
          }}
        >
          view all
        </p>
      </div>
      <div className="grid grid-cols-3 max-w-screen-xl mx-auto">
        {data.map((blog, index) => {
          if (index < currentPostIndex) {
            return (
              <Blogs
                key={blog.id}
                coverImage={blog.cover_image}
                blogTags={blog.tag_list}
                title={blog.title}
                date={blog.published_at}
              />
            );
          }
        })}
      </div>
      <div className="w-full flex justify-center">
        <button
          className="border border-solid my-[100px] px-4 py-2 rounded"
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
