import { useContext, useState } from "react";
import { DataContext } from "@/components/DataContext";

import Link from "next/link";
import Dates from "../components/Dates";
import TagButton from "../components/TagButton";
import moment from "moment";

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
  const Blogs = (props) => {
    const { coverImage, blogTags, title, date, data, profileImage, userName } =
      props;

    return (
      <div className="border border-solid px-4 py-2 m-2 rounded flex flex-col gap-4">
        <Link href={`page/${data.id}`}>
          <img src={coverImage} className="h-60 w-full sm:w-[360px] rounded" />
        </Link>
        <div className="flex flex-col ">
          <div className="flex gap-2 flex-wrap max-h-7 overflow-hidden">
            {blogTags.map((tag, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleSelectTag(tag);
                  }}
                >
                  <TagButton tag={tag} />
                </div>
              );
            })}
          </div>
          <Link href={`page/${data.id}`}>
            <p className="font-semibold text-2xl h-16 overflow-clip">{title}</p>
          </Link>
          <div className="flex gap-5 py-6 items-center">
            <a href={`${data.user.website_url}`}>
              <User userName={userName} profileImage={profileImage} />
            </a>
            <Dates date={moment(date).format("LL")} />
          </div>
        </div>
      </div>
    );
  };

  const User = (props) => {
    const { profileImage, userName } = props;
    if (profileImage == null) {
      return null;
    } else {
      return (
        <div className="flex gap-2 items-center ">
          <img src={profileImage} className="w-9 h-9 rounded-full" />
          <p className="text-[#97989F]">{userName}</p>
        </div>
      );
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-12">
      <h1
        className="text-3xl font-bold px-4 pb-8 cursor-pointer"
        onClick={() => handleSelectTag("")}
      >
        All Blog Post
      </h1>

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
