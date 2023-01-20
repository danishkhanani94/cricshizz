import Lightroom from "react-lightbox-gallery";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleGallery = (props) => {
  const param = useParams();
  const [limitstart, SetLimitstart] = useState(0);
  const [limit, SetLimit] = useState(20);
  const [Data, SetData] = useState([]);
  const [more, SetMore] = useState(true);
  const [Images, SetImages] = useState([]);
  const [Setting, SetSetting] = useState({
    columnCount: {
      default: 4,
      mobile: 1,
      tab: 2,
    },
    mode: "dark",
  });
  async function getGallery(id) {
    SetData([]);
    SetImages([]);
    await axios
      .get(`${process.env.REACT_APP_B_GALLERY_URL}${id}`)
      .then((res) => {
        const ResP = res.data.Data;
        SetData(ResP);
        ResP.map((e, i) => {
          SetImages((oldArray) => [
            ...oldArray,
            { src: process.env.REACT_APP_B_GALLERY_G_URL + "" + id + "/" + e },
          ]);
        });
      });
  }
  useEffect(() => {
    const { id } = param;
    fetchMoreData();
    getGallery(id);
  }, []);
  const fetchMoreData = () => {
    SetData(Data.concat(Images.slice(limitstart, limit)));
    if (Images.slice(limitstart, limit).length < 1) {
      SetMore(false);
    }
    SetLimit(limit + 10);
    SetLimitstart(limitstart + 10);
  };
  return (
    <>
      <section className={`content-listing theme-highlight widget`}>
        <div className="constraint-wrapper">
          <header className="widget-header justify-content-right w-h-cs">
            {props.galleri.match_summary !== null && props.galleri.match_summary !== "" ? (
              <a
                href={props.galleri.match_summary}
                target="_blank"
                className="btn_v_glry rigth_6_dwn embeddable-cta__button embeddable-cta__button--gradient-bg"
              >
                Match Summary

                <svg class="embeddable-cta__arrow">
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="/resources/prod/v8.28.1/i/svg-output/icons.svg#icn-chevron-right"
                  ></use>
                </svg>
              </a>
            ) : (
              ""
            )}
            {props.galleri.blog_id !== null && props.galleri.blog_id !== "" ? (
              <Link
                to={`/blog/detail/${props.galleri.blog_id}`}
                className="btn_v_glry rigth_6_dwn embeddable-cta__button embeddable-cta__button--gradient-bg"
              >
                View Blog
                <svg class="embeddable-cta__arrow">
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="/resources/prod/v8.28.1/i/svg-output/icons.svg#icn-chevron-right"
                  ></use>
                </svg>
              </Link>
            ) : (
              ""
            )}
          </header>
          {Images.length > 0 ? (
            <InfiniteScroll
              dataLength={999999}
              next={fetchMoreData}
              style={{ overflow: "hidden" }}
              hasMore={more}
            >
              <div className="content-hero__container">
                <Lightroom
                  images={Images}
                  settings={Setting}
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
