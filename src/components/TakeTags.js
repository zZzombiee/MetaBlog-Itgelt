const TakeTags = (props) => {
  const [tag, data] = props;
  const tagData = (tag) => {
    let myArr = [];
    data.map((blog, index) => {
      blog.tag_list.map((tags) => {
        if (tags === tag) {
          myArr.push(blog);
        }
      });
    });
    return console.log(myArr), console.log(tag);
  };
  return;
};

export default TakeTags;
