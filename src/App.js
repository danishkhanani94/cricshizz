import Slider from "./components/slider";
import Video from "./components/video";
import EditorPicks from "./components/editorspicks";
import Teams from "./components/teams";
import Layout from "./Layouts/Layout";
import MetaTags from "react-meta-tags";
import "./App.css";

function App() {
  return (
    <>
      <MetaTags>
        <title>{`${process.env.REACT_APP_NAME}`} </title>
      </MetaTags>
      <Layout>
        <Video />
        <Slider />
        <EditorPicks />
        {/* <Teams /> */}
      </Layout>
    </>
  );
}

export default App;
