import "@/styles/globals.css";
import Layout from "@/components/Layout";
import DataContextProvider from "@/components/DataContext";

export default function App({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataContextProvider>
  );
}
