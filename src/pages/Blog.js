import Blogdetail from "../components/blog_detail";
import Layout from "../Layouts/Layout";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Layout>
        <Helmet>
          <title>{`${process.env.REACT_APP_NAME} | Blog `} </title>
        </Helmet>
        <Blogdetail />
      </Layout>
    </>
  );
}

export default App;
