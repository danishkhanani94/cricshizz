import Layout from "../Layouts/Layout";
import Slider from "../components/slider";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Layout>
        <Helmet>
          <meta name="author" content={`${process.env.REACT_APP_NAME}`} />
          <meta property="og:url" content={window.location.href} />
          <title>{`${process.env.REACT_APP_NAME} | Blog `} </title>
          <meta name="description" content={`Cric Shizz Blogs `} />
          <meta
            property="og:title"
            content={`${process.env.REACT_APP_NAME} | Blog `}
          />
          <meta property="og:type" content="website" />
        </Helmet>
        <Slider all={true} />
      </Layout>
    </>
  );
}

export default App;
