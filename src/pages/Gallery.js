import Layout from "../Layouts/Layout";
import Gallery from "../components/editorspicks";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Layout>
        <Helmet>
          <meta name="author" content={`${process.env.REACT_APP_NAME}`} />
          <meta property="og:url" content={window.location.href} />
          <title>{`${process.env.REACT_APP_NAME} | Gallery `} </title>
          <meta name="description" content={`Cric Shizz Gallery `} />
          <meta
            property="og:title"
            content={`${process.env.REACT_APP_NAME} | Gallery `}
          />
          <meta property="og:type" content="website" />
        </Helmet>
        <Gallery all={true} />
      </Layout>
    </>
  );
}

export default App;
