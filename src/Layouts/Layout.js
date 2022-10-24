import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  console.log(props);
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
