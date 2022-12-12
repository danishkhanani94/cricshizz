import Slider from "./components/slider";
import Video from "./components/video";
import EditorPicks from "./components/editorspicks";
import Layout from "./Layouts/Layout";
import MetaTags from "react-meta-tags";

import "./App.css";

function App() {
  return (
    <>
      <MetaTags>
        <meta name="author" content={`${process.env.REACT_APP_NAME}`} />
        <meta property="og:url" content={window.location.href} />
        <title>{`${process.env.REACT_APP_NAME}`} </title>
        <meta property="og:type" content="website" />
      </MetaTags>
      <Layout>
        <Video />
        <Slider />
        <EditorPicks />
      </Layout>
    </>
  );
}

export default App;
