import { createContext } from "react";
import useSWR from "swr";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const DataContext = createContext("");

const DataContextProvider = (props) => {
  const { children, articles } = props;

  // console.log(articles);

  const { data: blogs, isLoading } = useSWR(url, fetcher);
  if (isLoading) {
    return (
      <div className="w-screen flex justify-center h-screen items-center">
        <span className="loading loading-spinner loading-lg  "></span>
      </div>
    );
  }

  return <DataContext.Provider value={blogs}>{children}</DataContext.Provider>;
};

export default DataContextProvider;

export async function getServerSideProps() {
  try {
    const response = await fetch(`https://dev.to/api/articles`);
    const articles = await response.json();

    console.log(articles);

    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
