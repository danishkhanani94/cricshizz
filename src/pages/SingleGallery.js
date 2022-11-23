import Layout from "../Layouts/Layout";
import SingleGallery from "../components/singlegallery";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function App() {
  const param = useParams();
  const [Gallery, SetGallery] = useState([]);
  const [Name, Setname] = useState();
  useEffect(() => {
    let { id } = param;
    async function getGallery() {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}gallery/getByID/${id}`)
        .then((res) => {
          SetGallery(res.data[0].Data);
          Setname(res.data[0].Data[0].album_name);
        });
    }
    getGallery();
  }, []);

  return (
    <>
      <Layout>
        <header className="page-header">
          <div className="wrapper">
            <div className="col-12">
              <div className="page-header__banner text-align-center">
                <h1 className="page-title">{Name}</h1>
              </div>
            </div>
          </div>
        </header>
        {Gallery.length > 0 ? (
          <SingleGallery all={true} Gallery={Gallery} />
        ) : (
          ""
        )}
      </Layout>
    </>
  );
}

export default App;
