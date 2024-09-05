import { useRouter } from "next/router";
import parse from "html-react-parser";
import useSWR from "swr";
import Header from "../components/Header";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AllBlogs = () => {
  const router = useRouter();
  const blogId = router.query.blogId;

  const url = `https://dev.to/api/articles/${blogId}`;

  const { data: blogDetail = {}, isLoading } = useSWR(url, fetcher);

  if (isLoading) return null;

  console.log(blogDetail);
  return (
    <div>
      <Header />
    </div>
  );
};

export default AllBlogs;
