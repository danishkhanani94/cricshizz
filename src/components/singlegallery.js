import Lightroom from "react-lightbox-gallery";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleGallery = (props) => {
  const param = useParams();
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
          <header className="widget-header justify-content-right">
            <a
              href={`${process.env.REACT_APP_SERVER_URL}gallery/downloadall/${param?.id}`}
              target="_blank"
              className="btn_v_glry rigth_6_dwn embeddable-cta__button embeddable-cta__button--gradient-bg"
            >
              Download All
              <svg className="embeddable-cta__arrow">
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="/resources/prod/v8.28.1/i/svg-output/icons.svg#icn-criiio-download"
                ></use>
              </svg>
            </a>
          </header>
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
