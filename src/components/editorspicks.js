import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import InfiniteScroll from "react-infinite-scroll-component";

const Editorpicks = (props) => {
  const [Gallery, SetGallery] = useState([]);
  const [limitStart, SetLimitStart] = useState(0);
  const [limit, SetLimit] = useState(props.all === true ? 20 : 6);
  const [more, SetMore] = useState(true);

  async function getGallery(s, e) {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}gallery/all/${s}/${e}`)
      .then((res) => {
        SetGallery(Gallery.concat(res.data[0].Data));
        if (!res.data[0].Data) {
          SetMore(false);
        }
        SetLimit(limit + 20);
        SetLimitStart(limitStart + 20);
      });
  }
  useEffect(() => {
    getGallery(limitStart, limit);
  }, []);

  const fetchMoreData = () => {
    getGallery(limitStart, limit);
  };

  const GalleryCard = ({ data }) => {
    return (
      <>
        <article
          className="media-thumbnail-horizontal  media-thumbnail-horizontal--mobile-compact "
          data-widget="lazy-load-images"
        >
          <Link
            className="media-thumbnail-horizontal__link"
            to={`/gallery/${data.id}`}
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

  const LitGallery = (props) => {
    const gallery = props.data;
    return (
      <>
        <div
          className="content-hero__item-container content-hero__item-container--cards"
          data-itemlist-id="2841517"
        >
          <article
            className={`media-thumbnail media-thumbnail--no-bg-responsive media-thumbnail--show-publish-date `}
            data-widget="lazy-load-images"
          >
            <Link
              className="media-thumbnail__link"
              to={`/gallery/${gallery.id}`}
              title=""
            >
              <header className="media-thumbnail__image-container">
                <div className="lazy-image is-loaded">
                  <div className="js-lazy-load u-observed lazy-image-wrapper">
                    <picture className="object-fit-cover-picture">
                      <img
                        className="js-faded-image fade-in-on-load object-fit-cover-picture__img"
                        src={`${process.env.REACT_APP_BUCKET_URL}${gallery.mainbanner}`}
                        alt={gallery?.album_name}
                      />
                    </picture>
                  </div>
                </div>
              </header>
              <div className="media-thumbnail__meta">
                <span className="media-thumbnail__tag theme theme-t20wc">
                  {gallery.match_category}
                </span>
                <h1 className="media-thumbnail__heading">
                  {gallery?.album_name}
                </h1>
                <time className="media-thumbnail__date">
                  {format(gallery.created_at, "en_US")}{" "}
                </time>
              </div>
            </Link>
          </article>
        </div>
      </>
    );
  };

  const BigGallerySlide = (props) => {
    const gallery = props.data;
    return (
      <>
        <div
          className="content-hero__item-container content-hero__item-container--lead-media-item"
          data-itemlist-id="2841523"
        >
          <article
            className="lead-media-item  lead-media-item--no-bg"
            data-widget="lazy-load-images"
          >
            <Link
              className="lead-media-item__link"
              to={`/gallery/${gallery.id}`}
              title=""
            >
              <header className="lead-media-item__image-container">
                <div className="lazy-image">
                  <div className="js-lazy-load u-observed lazy-image-wrapper">
                    <picture className="object-fit-cover-picture ">
                      <img
                        className="js-faded-image fade-in-on-load object-fit-cover-picture__img"
                        src={`${process.env.REACT_APP_BUCKET_URL}${gallery.mainbanner}`}
                        alt={gallery?.album_name}
                      />
                    </picture>
                  </div>
                </div>
              </header>
              <div className="lead-media-item__container w-100">
                <div className="lead-media-item__tag">
                  <span className="lead-media-item__tag-text theme theme-t20wc">
                    {gallery?.match_category}
                  </span>
                </div>
                <h1 className="lead-media-item__heading">
                  {gallery?.album_name}
                </h1>
                <div className="lead-media-item__meta">
                  <time className="lead-media-item__date">
                    {format(gallery.created_at, "en_US")}{" "}
                  </time>
                </div>
              </div>
            </Link>
          </article>
        </div>
      </>
    );
  };
  return (
    <>
      <section
        className={`${
          props.all === true
            ? "content-hero"
            : "content-listing theme-highlight widget"
        } `}
      >
        <div className="constraint-wrapper">
          {props.all == true ? (
            <div className="content-hero__container">
              <div
                className={`content-hero__block-layout content-hero__block-layout--lead-media-item ${
                  props.all === true ? "min-hei-400px" : ""
                }`}
              >
                {Gallery?.map((v, i) => {
                  if (i === 0) {
                    return <BigGallerySlide key={i} data={v} />;
                  }
                })}
              </div>
              <div className="content-hero__block-layout content-hero__block-layout--cards smdown_grid">
                {Gallery?.map((v, i) => {
                  if (i !== 0 && i < 5) {
                    return <LitGallery key={i} data={v} />;
                  }
                })}
              </div>
            </div>
          ) : (
            ""
          )}
          <header className="widget-header">
            {props.all == true ? (
              ""
            ) : (
              <>
                <h2 className="widget-header__title ">Gallery</h2>
                <Link
                  to={`/gallery`}
                  className="widget-header-link  u-hide-tablet"
                  title="More Galleries"
                >
                  More <span>Galleries</span>{" "}
                  <svg
                    className="icon widget-header-link__icon"
                    aria-hidden="true"
                  >
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                    ></use>
                  </svg>
                </Link>
              </>
            )}
          </header>
          <div
            className={`${
              props.all === true ? "" : "content-listing__container"
            }`}
          >
            {props.all === true ? (
              <InfiniteScroll
                dataLength={Gallery.length}
                next={fetchMoreData}
                hasMore={more}
                style={{ overflow: "hidden" }}
              >
                <div className="content-hero__container">
                  <div
                    className={`content-hero__block-layout content-hero__block-layout--cards w-100 smdown_grid`}
                  >
                    {Gallery?.map((v, i) => (
                      <LitGallery key={i} data={v} all={props.all} />
                    ))}
                  </div>
                </div>
              </InfiniteScroll>
            ) : (
              <>
                {Gallery?.map((v, i) => {
                  if (i < 6) {
                    return <GalleryCard key={i} data={v} />;
                  }
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Editorpicks;
