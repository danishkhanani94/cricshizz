import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
const SingleGallery = (props) => {
  const param = useParams();
  const [limitstart, SetLimitstart] = useState(0);
  const [limit, SetLimit] = useState(10);
  const [Data, SetData] = useState([]);
  const [more, SetMore] = useState(true);
  const [Images, SetImages] = useState([]);
  const [SData, SetSData] = useState([]);
  const [Setting, SetSetting] = useState({
    columnCount: {
      default: 2,
      mobile: 2,
      tab: 1,
    },
    mode: "dark",
  });
  async function getGallery(id) {
    SetData([]);
    SetImages([]);
    SetSData([]);
    await axios
      .get(`${process.env.REACT_APP_B_GALLERY_URL}${id}`)
      .then((res) => {
        const ResP = res.data.Data;
        SetData(ResP);
        SetImages(ResP);
        fetchMoreData(ResP);
      });
  }
  useEffect(() => {
    const { id } = param;
    getGallery(id);
  }, []);
  const fetchMoreData = (ResP) => {
    if (ResP) {
      SetSData(ResP.slice(limitstart, limit));
      if (ResP.slice(limitstart, limit).length < 1) {
        SetMore(false);
        console.log("call");
      }
    } else {
      SetSData((oldArray) => [
        ...oldArray,
        ...Images.slice(limitstart, limit),
      ]);
      if (Images.slice(limitstart, limit).length < 1) {
        SetMore(false);
        console.log("call");
      }
      console.log(SData)
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
            ) : props.galleri.match_summary_o !== null && props.galleri.match_summary_o !== "" && props.galleri.match_summary_o !== undefined ? <a
              href={props.galleri.match_summary_o}
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
            </a> : (
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
          {SData.length > 0 ? (
            <InfiniteScroll
              dataLength={SData.length}
              next={fetchMoreData}
              style={{ overflow: "hidden" }}
              hasMore={true}
            >
              <LightGallery
                elementClassNames="row-l-b"
                speed={500}
                className="row-l-b"
                plugins={[lgThumbnail, lgZoom]}
              >
                {
                  SData.map((e, i) => {
                    return (
                      <div className="item-row-light item" key={i} data-src={e.src}>
                        <img src={e.src} className="img_hov_cur_pointer" />
                      </div>
                    )
                  })
                }
              </LightGallery>
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
