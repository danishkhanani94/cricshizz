import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { format, render, cancel, register } from "timeago.js";

const LitBlog = (props) => {
  const blog = props.data;
  return (
    <>
      <div
        className="content-hero__item-container content-hero__item-container--cards"
        data-itemlist-id="2841517"
      >
        <article
          className="media-thumbnail media-thumbnail--no-bg-responsive media-thumbnail--show-publish-date"
          data-widget="lazy-load-images"
        >
          <Link
            className="media-thumbnail__link"
            to={`/blog/detail/${blog.id}`}
            title=""
          >
            <header className="media-thumbnail__image-container">
              <div className="lazy-image is-loaded">
                <div className="js-lazy-load u-observed lazy-image-wrapper">
                  <picture className="object-fit-cover-picture">
                    <img
                      className="js-faded-image fade-in-on-load object-fit-cover-picture__img"
                      src={`${process.env.REACT_APP_BUCKET_URL}${blog.banner_main}`}
                      alt="Fan Craze 16.9"
                    />
                  </picture>
                </div>
              </div>
            </header>
            <div className="media-thumbnail__meta">
              <span className="media-thumbnail__tag theme theme-t20wc">
                {blog.short_title}
              </span>
              <h1 className="media-thumbnail__heading">{blog.title}</h1>
              <time className="media-thumbnail__date">
                {format(blog.created_at, "en_US")}
              </time>
            </div>
          </Link>
        </article>
      </div>
    </>
  );
};

const BigBlogSlide = (props) => {
  const blog = props.data;
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
            to={`/blog/detail/${blog.id}`}
            title=""
          >
            <header className="lead-media-item__image-container">
              <div className="lazy-image">
                <div className="js-lazy-load u-observed lazy-image-wrapper">
                  <picture className="object-fit-cover-picture ">
                    <img
                      className="js-faded-image fade-in-on-load object-fit-cover-picture__img"
                      src={`${process.env.REACT_APP_BUCKET_URL}${blog.banner_main}`}
                      alt="David Warner Player of the Tournament"
                    />
                  </picture>
                </div>
              </div>
            </header>
            <div className="lead-media-item__container">
              <div className="lead-media-item__tag">
                <span className="lead-media-item__tag-text theme theme-t20wc">
                  {blog?.short_title}
                </span>
              </div>
              <h1 className="lead-media-item__heading">{blog?.title}</h1>
              <div className="lead-media-item__meta">
                <time className="lead-media-item__date">
                  {format(blog.created_at, "en_US")}
                </time>
              </div>
            </div>
          </Link>
        </article>
      </div>
    </>
  );
};

const Slider = () => {
  const [Blogs, SetBlogs] = useState([]);

  useEffect(() => {
    document.querySelectorAll("video")[0].play();
    async function getBlogs() {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}blogs/`)
        .then((res) => {
          SetBlogs(res.data[0].Data);
        });
    }
    getBlogs();
  }, []);

  return (
    <>
      {/* Coming Soon Section Top */}
      {/* <section
        className="match-card-list u-hide-tablet is-active"
        data-widget="match-card-list"
        data-script="icc-cricket_match-card-list"
      >
        <div className="constraint-wrapper">
          <div className="content-slider">
            <div className="match-card-list__controls-container">
              <div className="match-card-list__tabs">
                <button
                  className="match-card-list__button js-show-results is-active"
                  title="Results"
                >
                  Results
                </button>
              </div>
            </div>

            <div
              className="content-slider__wrapper js-scroll-list"
              data-widget="match-card-container"
              data-template="common.match-card-list-desktop"
              data-manually-curated="false"
              data-sort="asc"
              data-match-states="C,U,L"
              data-match-types="OTHER,T20I,T20,TEST,ODI,FIRST_CLASS,LIST_A"
              data-team-types="b,w,m"
              data-tournament-types="WI,I"
              data-page-size="30"
              data-is-carousel="true"
            >
              <ul className="js-content-slider-content content-slider__inner-wrapper js-match-cards-container">
                <h1 className="configurable-promo__title text-blue coming-soon-text">
                  Comming Soon
                </h1>
              </ul>
            </div>

            <ul className="pager js-paginator u-hide-tablet "></ul>
          </div>
        </div>
      </section> */}
      <section className="video-hero video-hero--top ">
        <Link className="video-hero__banner">
          <div
            className="inline-player video-hero__video-container"
            data-script="icc_video"
            data-widget="video-player"
          >
            <div
              playsinline="true"
              loop="true"
              muted="true"
              autoplay="true"
              className="video-js vjs-controls-disabled vjs-workinghover vjs-v7 bc-player-default_default bc-player-default_default-index-0 vjs-mouse vjs-plugins-ready vjs-player-info vjs-contextmenu vjs-contextmenu-ui vjs-errors vjs-playing vjs-has-started vjs-layout-medium vjs-user-inactive"
              data-application-id=""
              data-embed="default"
              data-player="default"
              data-account="3910869736001"
              data-video-id="6302950251001"
              id="iccVideoPlayer2563965"
              tabindex="-1"
              role="region"
              lang="en"
              translate="no"
              aria-label="Video Player"
            >
              <video
                id="iccVideoPlayer2563965_html5_api"
                data-video-id="6302950251001"
                data-account="3910869736001"
                data-player="default"
                data-embed="default"
                data-application-id=""
                className="vjs-tech"
                muted="muted"
                loop={true}
                playsInline="playsinline"
                tabIndex="-1"
                role="application"
                src="https://cricshizz.com.pk/videos/slider.mp4"
              ></video>
              <script src="https://vjs.zencdn.net/vttjs/0.15.3/vtt.global.min.js"></script>
              <div
                className="vjs-text-track-display"
                translate="yes"
                aria-live="off"
                aria-atomic="true"
              >
                <div
                  style={{ position: "absolute", inset: "0px", margin: "1.5%" }}
                ></div>
              </div>
            </div>
          </div>
          <div class="video-hero__overlay"></div>
          <div class="video-hero__overlay-bottom-gradient"></div>
          <div class="video-hero__text">
            <div class="wrapper">
              <div class="col-12">
                <p
                  class="video-hero__tag video-hero__tag--womens-world-cup"
                  title="Women's Cricket World Cup"
                >
                  #ItHasBegun
                </p>
                <h1 class="video-hero__title">
                  For Every Match There Is A Moment To Capture
                </h1>
              </div>
            </div>
          </div>
        </Link>
      </section>
      <section className="content-hero ">
        <div className="constraint-wrapper">
          <div className="content-hero__container">
            <div className="content-hero__block-layout content-hero__block-layout--lead-media-item">
              {Blogs?.map((v, i) => {
                if (i === 0) {
                  return <BigBlogSlide key={i} data={v} />;
                }
              })}
            </div>
            <div className="content-hero__block-layout content-hero__block-layout--cards">
              {Blogs?.map((v, i) => {
                if (i !== 0 && i < 5) {
                  return <LitBlog key={i} data={v} />;
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Slider;
