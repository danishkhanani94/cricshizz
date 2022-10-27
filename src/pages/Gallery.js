import Layout from "../Layouts/Layout";
import Gallery from "../components/editorspicks";

function App() {
  return (
    <>
      <Layout>
        <header className="page-header">
          <div className="wrapper">
            <div className="col-12">
              <div className="page-header__banner">
                <h1 className="page-title">Gallery </h1>
              </div>
            </div>
          </div>
        </header>
        <Gallery all={true} />
      </Layout>
    </>
  );
}

export default App;
