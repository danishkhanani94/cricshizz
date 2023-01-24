import Layout from "../Layouts/Layout";
import Squads from "../components/squads";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleTeam() {
    const param = useParams();
    const [Name, Setname] = useState();
    const [Image, SetImage] = useState();
    const [Team, SetTeam] = useState([]);
    useEffect(() => {
        let { id } = param;
        async function getTeam() {
            await axios
                .get(`${process.env.REACT_APP_SERVER_URL}team/getByID/${id}`)
                .then((res) => {
                    Setname(res.data[0].Data[0].name);
                    SetTeam(res.data[0].players);
                    SetImage(res.data[0].Data[0].logo);
                });
        }
        getTeam();
    }, []);

    return (
        <>
            <Layout>
                <header className="page-header">
                    <div className="wrapper">
                        <div className="col-12">
                            <div className="page-header__banner text-align-center">
                            <div className="team-prof-lgo" style={{height:`100px`, marginTop:`10px`,marginBottom:`10px`}}>
                                <img src={Image === "" ? `${process.env.REACT_APP_BUCKET_URL}player-1.jpg` : `${process.env.REACT_APP_BUCKET_URL}${Image}`}  style={{height:`100px`,width:`100px`}}/>
                            </div>
                                <h1 className="page-title">{Name}</h1>
                            </div>
                        </div>
                    </div>
                </header>
                {Team.length > 0 ? <Squads team={Team} /> : ""}
            </Layout>
        </>
    );
}

export default SingleTeam;
