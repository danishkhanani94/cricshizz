import Layout from "../Layouts/Layout";
import Gallery from "../components/editorspicks";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Layout>
        <Helmet>
          <title>{`${process.env.REACT_APP_NAME} | Gallery `} </title>
        </Helmet>
        <Gallery all={true} />
      </Layout>
    </>
  );
}

export default App;
