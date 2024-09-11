import { createContext } from "react";
import useSWR from "swr";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const DataContext = createContext("");

const DataContextProvider = ({ children }) => {
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...Loading</p>;
  }
  if (error) {
    return <div className="max-w-screen-lg mx-auto "></div>;
  }

  return <DataContext.Provider value={blogs}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
