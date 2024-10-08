import { useRouter } from "next/router";
import useSWR from "swr";
import moment from "moment";
import rehypeHighlight from "rehype-highlight";
import Markdown from "markdown-to-jsx";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AllBlogs = () => {
  const router = useRouter();
  const blogId = router.query.blogId;

  const url = `https://dev.to/api/articles/${blogId}`;

  const { data: blogDetail = {}, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) return null;

  if (error) {
    return;
  }

  const body_markdown = blogDetail?.body_markdown;
  console.log(blogDetail);
  return (
    <div className="my-20">
      <div className="flex flex-col max-w-screen-md mx-auto">
        <p className="font-semibold text-4xl pb-2 ">{blogDetail?.title}</p>
        <div className="flex gap-4 ">
          <a href={`${blogDetail?.user?.website_url}`} className="flex gap-1">
            <img
              src={blogDetail?.user?.profile_image}
              className="rounded-full w-7"
            />
            <p className="">{blogDetail?.user?.name}</p>
          </a>
          <p>{moment(blogDetail?.published_at).format("LL")}</p>
        </div>
        <img className="rounded-xl my-8" src={blogDetail?.cover_image} />
        <div className="prose mx-auto ">
          <Markdown rehypeplugins={[rehypeHighlight]}>{body_markdown}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
