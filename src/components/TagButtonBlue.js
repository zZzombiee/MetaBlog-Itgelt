const TagButtonBlue = (props) => {
  const { tag } = props;
  return (
    <button className="bg-[#4B6BFB] px-2 py-1 rounded text-[#ffffff] font-medium text-sm">
      {tag}
    </button>
  );
};

export default TagButtonBlue;
