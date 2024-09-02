import Blogs from "@/components/Blogs";

const AllBlogPosts = (props) => {
  const { data } = props;
  return (
    <div>
      <h1 className="text-3xl font-bold">All Blog Post</h1>
      <div className="flex justify-between">
        <div className="flex gap-5 py-8">
          <p>All</p>
          <p>Design</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
          <p>Branding</p>
        </div>
        <p>view all</p>
      </div>
      <div className="grid grid-cols-3 max-w-screen-xl mx-auto">
        {data.map((blog, index) => {
          if (index < 9) {
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
        <button className="border border-solid my-[100px] px-4 py-2 rounded  ">
          Load More
        </button>
      </div>
    </div>
  );
};
export default AllBlogPosts;
