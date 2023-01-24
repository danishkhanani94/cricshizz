import Layout from "../Layouts/Layout";
import Slider from "../components/slider";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Layout>
        <Helmet>
          <title>{`${process.env.REACT_APP_NAME} | Blog `} </title>
        </Helmet>
        <Slider all={true} />
      </Layout>
    </>
  );
}

export default App;
