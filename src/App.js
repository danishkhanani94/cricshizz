import Slider from "./components/slider";
import Join from "./components/join";
import Video from "./components/video";
import EditorPicks from "./components/editorspicks";
import Layout from "./Layouts/Layout";

import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Video />
        <Slider />
        <EditorPicks />
        {/* <Join /> */}
      </Layout>
    </>
  );
}

export default App;
