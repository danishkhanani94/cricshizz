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
