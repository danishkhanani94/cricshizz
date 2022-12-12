import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogDetail = () => {
  const [Blogs, SetBlogs] = useState({});
  const param = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    let { id } = param;
    async function getBlog() {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}blogs/getByID/${id}`)
        .then((res) => {
          SetBlogs(res.data[0].Data[0]);
        });
    }
    getBlog();
    if (window.FB) {
      window.FB.init({
        xfbml: true,
        version: "v15.0",
      });
    }
  }, []);
  return (
    <>
      <Helmet prioritizeSeoTags>
        <meta name="author" content={`${process.env.REACT_APP_NAME}`} />
        <meta property="og:url" content={window.location.href} />
        <title>{`${process.env.REACT_APP_NAME} | ${Blogs?.title}`} </title>
        <meta name="description" content={Blogs?.description} />
        <meta
          property="og:title"
          content={`${process.env.REACT_APP_NAME} | ${Blogs?.title}`}
        />
        <meta
          property="og:image"
          content={`${process.env.REACT_APP_BUCKET_URL}${Blogs?.banner_main}`}
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="brand-strip brand-strip--tall"></div>
      <main
        id="main-content"
        className="js-body-content uryerteuyteuygbc"
        tabIndex="0"
      >
        <div className="article-header__fixed">
          <header
            className="article-header article-header--"
            data-script="icc_article"
            data-widget="article-header"
          >
            <picture className="js-lazy-picture lazy-load article-header__picture">
              <img
                src={`${process.env.REACT_APP_BUCKET_URL}${Blogs.banner_inner}`}
                alt="Shaun Pollock"
                className="article-header__img"
              />
            </picture>
            <div className="article-header__container js-article-header-parallax">
              <div className="wrapper">
                <div className="col-8 col-12-tab">
                  <div className="article-header__title js-article-header-title">
                    <div className="article-header__meta">
                      <svg className="icon">
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="/resources/prod/v8.28.1/i/svg-output/icons.svg#icn-article"
                        ></use>
                      </svg>
                      <span className="article-header__tag">
                        {Blogs?.match_category}{" "}
                      </span>
                      <time className="article-header__published">
                        {format(Blogs?.created_at, "en_US")}
                      </time>
                    </div>
                    <h1 className="article-header__title-text js-page-title">
                      {Blogs.title}
                    </h1>
                    <h3 class="article-header__subtitle js-article-header-subtitle pl-0">
                      {Blogs?.team_a}
                      {Blogs.team_a ? " VS " : ""}
                      {Blogs?.team_b}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="article__fixed-body js-article-body">
          <div className="wrapper">
            <div className="col-9 col-12-tab">
              <article
                className="article article--"
                data-tracker-action="VIEW"
                data-tracker-type="TEXT"
                data-tracker-id="2349447"
                data-tracker-status="false"
              >
                <div className="article__container">
                  <p className="article__summary">{Blogs.description}</p>
                  <div className="text-align-center embeddable-cta mb-3">
                    {Blogs.match_summary !== undefined &&
                    Blogs.match_summary !== "" ? (
                      <a
                        target="_blank"
                        href={`${Blogs.match_summary}`}
                        className="btn_v_glry embeddable-cta__button embeddable-cta__button--gradient-bg"
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
                  </div>
                  <div className="article__content">
                    <p>{Blogs.longdescription}</p>
                    {/* <div className="text-align-center embeddable-cta mb-3">
                      {Blogs.gallery !== undefined && Blogs.gallery !== 0 ? (
                        <Link
                          to={`/gallery/${Blogs.gallery}`}
                          className="btn_v_glry embeddable-cta__button embeddable-cta__button--gradient-bg"
                        >
                          View Gallery{" "}
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
                    </div> */}
                    
                    <div className="text-align-center embeddable-cta mb-3">
                      {Blogs.fb_gallery !== undefined && Blogs.fb_gallery !== "" ? (
                        <a
                        target="_blank"
                        href={`${Blogs.fb_gallery}`}
                          className="btn_v_glry embeddable-cta__button embeddable-cta__button--gradient-bg"
                        >
                          View Gallery{" "}
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
                    </div>
                    <img
                      src={`${process.env.REACT_APP_BUCKET_URL}${Blogs.banner_main}`}
                      alt="Shaun Pollock"
                      className="article-header__img"
                    />
                  </div>
                </div>
              </article>
            </div>
            <div className="col-3 col-12-tab">
              <section>
                <div
                  className="fb-page"
                  data-href="https://www.facebook.com/cricshizz"
                  data-tabs="timeline"
                  data-width=""
                  data-height="800px"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/cricshizz"
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/cricshizz">Cric Shizz</a>
                  </blockquote>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default BlogDetail;
