import { createContext } from "react";
import useSWR from "swr";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const DataContext = createContext("");

const DataContextProvider = ({ children }) => {
  const { data: blogs, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return (
      <div className="w-screen flex justify-center h-screen items-center">
        <span className="loading loading-spinner loading-lg  "></span>{" "}
      </div>
    );
  }

  return <DataContext.Provider value={blogs}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
