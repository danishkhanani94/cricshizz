import Lightroom from "react-lightbox-gallery";

const SingleGallery = (props) => {
  var data = props.Gallery[0]?.innerimages;
  var images = [];
  if (data) {
    data.forEach((e) => {
      images.push({
        src: process.env.REACT_APP_BUCKET_URL + e,
      });
    });
  }
  var settings = {
    columnCount: {
      default: 4,
      mobile: 1,
      tab: 2,
    },
    mode: "dark",
  };
  return (
    <>
      {" "}
      <section className={`content-listing theme-highlight widget`}>
        <div className="constraint-wrapper">
          <header className="widget-header"></header>
          <Lightroom images={images} settings={settings} className="img_hov_cur_pointer"/>
        </div>
      </section>
    </>
  );
};
export default SingleGallery;
