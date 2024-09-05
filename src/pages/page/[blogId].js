import { useRouter } from "next/router";
import parse from "html-react-parser";
import useSWR from "swr";
import Header from "../../components/Header";
import moment from "moment";
import About from "@/components/About";
import Footer from "@/components/Footer";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AllBlogs = () => {
  const router = useRouter();
  const blogId = router.query.blogId;

  const url = `https://dev.to/api/articles/${blogId}`;

  const { data: blogDetail = {}, isLoading } = useSWR(url, fetcher);

  if (isLoading) return null;

  console.log(blogDetail);
  return (
    <div className="  ">
      <div className="mb-[100px]">
        <Header />
      </div>
      <div className="flex flex-col  max-w-screen-lg mx-auto">
        <p className="font-semibold text-4xl pb-2 ">{blogDetail.title}</p>
        <div className="flex gap-4 ">
          <div className="flex gap-1">
            <img
              src={blogDetail.user.profile_image}
              className="rounded-full w-7"
            />
            <p className="">{blogDetail.user.name}</p>
          </div>
          <p>{moment(blogDetail.published_at).format("LL")}</p>
        </div>
        <img className="rounded-xl my-8" src={blogDetail.cover_image} />

        <div className="flex flex-wrap">{parse(blogDetail.body_html)}</div>
      </div>
      <div className="bg-gray-100 mt-20">
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default AllBlogs;
