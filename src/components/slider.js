import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import InfiniteScroll from "react-infinite-scroll-component";

const LitBlog = (props) => {
  const blog = props.data;
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
                {format(blog.created_at, "en_US")}{" "}
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
            <div className="lead-media-item__container w-100">
              <div className="lead-media-item__tag">
                <span className="lead-media-item__tag-text theme theme-t20wc">
                  {blog?.match_category}
                </span>
              </div>
              <h1 className="lead-media-item__heading">{blog?.title}</h1>
              <div className="lead-media-item__meta">
                <time className="lead-media-item__date flex_rmbtn_new w-100">
                  {format(blog.created_at, "en_US")}{" "}
                  <button className="rmore_btn">Read More &gt;&gt;</button>
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
  const [limitStart, SetLimitStart] = useState(0);
  const [limit, SetLimit] = useState(props.all === true ? 20 : 5);
  const [more, SetMore] = useState(true);
  async function getBlogs(s, e) {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}blogs/all/${s}/${e}`)
      .then((res) => {
        SetBlogs(Blogs.concat(res.data[0].Data));
        if (!res.data[0].Data) {
          SetMore(false);
        }
        SetLimit(limit + 20);
        SetLimitStart(limitStart + 20);
      });
  }
  async function getBlogsSearch(s, e, search) {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}blogs/all/${s}/${e}/${search}`)
      .then((res) => {
        SetBlogs(res.data[0].Data);
      });
  }
  const fetchMoreData = async () => {
    await getBlogs(limitStart, limit);
  };

  useEffect(() => {
    getBlogs(limitStart, limit);
  }, []);

  return (
    <>
      {props.all === true ? (
        <header className="page-header">
          <div className="wrapper">
            <div className="col-12">
              <div className="page-header__banner mt-10px text-align-center">
                <h1 className="page-title">Blogs </h1>
              </div>
              <div className="text-align-center">
                <input
                  type="text"
                  className="search_nscc"
                  onChange={(e) => {
                    getBlogsSearch(0, 200, e.target.value);
                  }}
                  placeholder="Search By Teams  ..."
                />
              </div>
            </div>
          </div>
        </header>
      ) : (
        ""
      )}
      <section className="content-hero ">
        <div className="constraint-wrapper">
          <div className="content-hero__container">
            <div
              className={`content-hero__block-layout content-hero__block-layout--lead-media-item ${
                props.all === true ? "min-hei-400px" : ""
              }`}
            >
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
            <InfiniteScroll
              dataLength={Blogs.length}
              next={fetchMoreData}
              hasMore={more}
              style={{ overflow: "hidden" }}
            >
              <div className="content-hero__container">
                <div
                  className={`content-hero__block-layout content-hero__block-layout--cards w-100 smdown_grid`}
                >
                  {Blogs?.map((v, i) => {
                    if (i > 4) {
                      return <LitBlog key={i} data={v} all={props.all} />;
                    }
                  })}
                </div>
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
export default Slider;
