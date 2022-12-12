import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect } from "react";

const Layout = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [])
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
