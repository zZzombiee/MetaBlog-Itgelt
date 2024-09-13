const TagButton = (props) => {
  const { tag } = props;
  if (tag) {
    return (
      <button className="text-[#4B6BFB] px-2 py-1 rounded bg-[#4B6BFB0D] font-medium text-sm hover:bg-[#4B6BFB] hover:text-[#ffffff]">
        {tag}
      </button>
    );
  }
  return;
};
export default TagButton;
