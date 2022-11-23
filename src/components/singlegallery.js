import Lightroom from "react-lightbox-gallery";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

const SingleGallery = (props) => {
  var data = props.Gallery[0]?.innerimages;
  const [limitstart, SetLimitstart] = useState(0);
  const [limit, SetLimit] = useState(20);
  const [Data, SetData] = useState(
    data !== undefined ? data.slice(0, limit) : []
  );
  const [more, SetMore] = useState(true);

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
  useEffect(() => {
    fetchMoreData();
  }, []);
  const fetchMoreData = () => {
    SetData(Data.concat(images.slice(limitstart, limit)));
    if (images.slice(limitstart, limit).length < 1) {
      SetMore(false);
    }
    SetLimit(limit + 10);
    SetLimitstart(limitstart + 10);
  };
  return (
    <>
      <section className={`content-listing theme-highlight widget`}>
        <div className="constraint-wrapper">
          <header className="widget-header"></header>
          {Data.length > 0 ? (
            <InfiniteScroll
              dataLength={Data.length}
              next={fetchMoreData}
              style={{ overflow: "hidden" }}
              hasMore={more}
            >
              <div className="content-hero__container">
                <Lightroom
                  images={Data}
                  settings={settings}
                  className="img_hov_cur_pointer"
                />
              </div>
            </InfiniteScroll>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};
export default SingleGallery;
