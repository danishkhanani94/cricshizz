import Layout from "../Layouts/Layout";
import Gallery from "../components/editorspicks";

function App() {
  return (
    <>
      <Layout>
        <Gallery all={true} />
      </Layout>
    </>
  );
}

export default App;
