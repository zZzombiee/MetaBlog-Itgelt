import About from "./About";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Header from "./Header";

const TagBlogPosts = (props) => {
  const { tagData } = props;
  return (
    <div>
      <Header />
      {tagData.map((data) => {
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
      <Footer />
    </div>
  );
};
export default TagBlogPosts;
