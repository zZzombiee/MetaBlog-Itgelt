import About from "../components/About";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Test from "../components/Test";

const TagBlogPosts = () => {
  return (
    <div>
      <Test />s
      {/* <Header />
      {tagData.map((data, index) => {
        return (
          <Blogs
            key={data.id}
            coverImage={data.cover_image}
            blogTags={data.tag_list}
            title={data.title}
            date={data.published_at}
          />
        );
      })}
      <About />
      <Footer /> */}
    </div>
  );
};
export default TagBlogPosts;
