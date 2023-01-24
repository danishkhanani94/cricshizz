import Layout from "../Layouts/Layout";
import Teams from "../components/teams";

function Team() {
  return (
    <>
      <Layout>
        <Teams all={true} />
      </Layout>
    </>
  );
}

export default Team;
