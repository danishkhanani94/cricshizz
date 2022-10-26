import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { format, render, cancel, register } from "timeago.js";

const Editorpicks = (props) => {
  const [Gallery, SetGallery] = useState([]);
  const limit = props.all == true ? 10 : 6;
  useEffect(() => {
    async function getGallery() {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}gallery/all/0/${limit}`)
        .then((res) => {
          SetGallery(res.data[0].Data);
        });
    }
    getGallery();
  }, []);

  const GalleryCard = ({ data }) => {
    return (
      <>
        <article
          className="media-thumbnail-horizontal  media-thumbnail-horizontal--mobile-compact "
          data-widget="lazy-load-images"
        >
          <Link
            className="media-thumbnail-horizontal__link"
            to="#):"
            title="Where to watch the T20 World Cup 2022? TV Broadcast partners and live streaming"
          >
            <div className="media-thumbnail-horizontal__container">
              <div className="media-thumbnail-horizontal__meta">
                <span className="media-thumbnail-horizontal__tag theme theme-t20wc">
                  {data?.match_category}
                </span>
                <h1 className="media-thumbnail-horizontal__heading">
                  {" "}
                  {data?.album_name}
                </h1>
                <time className="media-thumbnail-horizontal__date">
                  {format(data.created_at, "en_US")}
                </time>
              </div>
              <header className="media-thumbnail-horizontal__image-container">
                <div className="lazy-image">
                  <div className="js-lazy-load u-observed lazy-image-wrapper">
                    <picture className="object-fit-cover-picture ">
                      <img
                        className="js-faded-image fade-in-on-load object-fit-cover-picture__img"
                        src={`${process.env.REACT_APP_BUCKET_URL}${data.mainbanner}`}
                        alt="WCTrophy"
                      />
                    </picture>
                  </div>
                </div>
              </header>
            </div>
          </Link>
        </article>
      </>
    );
  };

  return (
    <>
      <section className="content-listing theme-highlight widget">
        <div className="constraint-wrapper">
          <header className="widget-header ">
            <h2 className="widget-header__title ">Gallery</h2>
            <a
              href="news.html"
              className="widget-header-link  u-hide-tablet"
              title="More <span className=''>Top Stories</span>"
            >
              More <span className="">Galleries</span>{" "}
              <svg className="icon widget-header-link__icon" aria-hidden="true">
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                ></use>
              </svg>
            </a>
          </header>

          <div className="content-listing__container">
            {Gallery?.map((v, i) => {
              if (i < 6) {
                return <GalleryCard key={i} data={v} />;
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Editorpicks;
