import { useEffect, useState } from "react";
import axios from "axios";
import { format, render, cancel, register } from "timeago.js";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const [Blogs, SetBlogs] = useState({});
  const param = useParams();
  useEffect(() => {
    let { id } = param;
    async function getBlog() {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}blogs/${id}`)
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
                          xlinkHref="../resources/prod/v8.28.1/i/svg-output/icons.svg#icn-article"
                        ></use>
                      </svg>
                      <span className="article-header__tag"></span>
                      <time className="article-header__published">
                        {format(Blogs.created_at, "en_US")}
                      </time>
                    </div>
                    <h1 className="article-header__title-text js-page-title">
                      {Blogs.title}
                    </h1>
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
                  <div
                    className="hit-for-six"
                    data-widget="hit-for-six"
                    data-reaction-type="TEXT"
                    data-reaction-id="2349447"
                    data-analytics-label="Shaun Pollock: Wicket-taking phenom and batting maestro"
                  >
                    <div className="hit-for-six__label-wrapper  js-hit-for-six">
                      <div className="hit-for-six__labels">
                        <div className="hit-for-six__title">Hit For Six!</div>
                        <div className="hit-for-six__section">
                          <div className="hit-for-six__counter js-clap-counter">
                            -
                          </div>
                        </div>
                      </div>
                      <div
                        className="hit-for-six__icon js-hit-for-six-button"
                        role="button"
                        tabIndex="0"
                      >
                        <span className="hit-for-six__clap-count-disc js-user-clap-counter"></span>
                        <svg className="hit-for-six__six-icon js-max-clap-total">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="../resources/prod/v8.28.1/i/svg-output/icons.svg#icn-hit-for-six"
                          ></use>
                        </svg>
                        <svg className="hit-for-six__hand-icon js-reaction-trigger">
                          <use
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xlinkHref="../resources/prod/v8.28.1/i/svg-output/icons.svg#icn-thumbs-up-solid-w"
                          ></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="article__summary">{Blogs.description}</p>
                  <div className="article__content">
                    <p>{Blogs.longdescription}</p>
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
