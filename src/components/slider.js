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
                      alt={blog?.title}
                    />
                  </picture>
                </div>
              </div>
            </header>
            <div className="media-thumbnail__meta">
              <span className="media-thumbnail__tag theme theme-t20wc">
                {blog.match_category}
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
                      alt={blog?.title}
                    />
                  </picture>
                </div>
              </div>
            </header>
            <div className="lead-media-item__container">
              <div className="lead-media-item__tag">
                <span className="lead-media-item__tag-text theme theme-t20wc">
                  {blog?.match_category}
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

const Slider = (props) => {
  const [Blogs, SetBlogs] = useState([]);

  useEffect(() => {
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
            <div className="content-hero__block-layout content-hero__block-layout--cards smdown_grid">
              {Blogs?.map((v, i) => {
                if (i !== 0 && i < 5) {
                  return <LitBlog key={i} data={v} />;
                }
              })}
            </div>
          </div>
          {props.all === true ? (
            <div className="content-hero__container">
              <div className="content-hero__block-layout content-hero__block-layout--cards w-100 smdown_grid">
                {Blogs?.map((v, i) => {
                  if (i >= 5) {
                    return <LitBlog key={i} data={v} />;
                  }
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};
export default Slider;
