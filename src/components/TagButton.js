const TagButton = (props) => {
  const { tag } = props;
  return (
    <button className="text-[#4B6BFB] px-2 py-1 rounded bg-[#4B6BFB0D] font-medium text-sm">
      {tag}
    </button>
  );
};
export default TagButton;
