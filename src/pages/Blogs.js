import Layout from "../Layouts/Layout";
import Slider from "../components/slider";

function App() {
  return (
    <>
      <Layout>
        <header className="page-header">
          <div className="wrapper">
            <div className="col-12">
              <div className="page-header__banner">
                <h1 className="page-title">Blogs </h1>
              </div>
            </div>
          </div>
        </header>
        <Slider all={true} />
      </Layout>
    </>
  );
}

export default App;
