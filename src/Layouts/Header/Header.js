import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="main-navigation__container js-will-glue">
        <header className="main-navigation">
          {/* Top Bar */}
          <section className="main-navigation__top-bar">
            <nav className="site-tabs">
              <ul className="site-tabs__list">
                <li className="site-tabs__item theme theme-icc is-active">
                  <a
                    className="site-tabs__link"
                    href="https://icc-cricket.com/hompage"
                  >
                    ICC Cricket
                  </a>
                </li>
                <li className="site-tabs__item theme theme-t20wc">
                  <a
                    className="site-tabs__link"
                    href="https://t20worldcup.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    Men’s T20 World Cup 2022
                  </a>
                </li>
                <li className="site-tabs__item theme theme-wcwc">
                  <a
                    className="site-tabs__link"
                    href="https://www.cricketworldcup.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    Women’s Cricket World Cup 2022
                  </a>
                </li>
                <li className="site-tabs__item theme theme-wtc">
                  <a
                    className="site-tabs__link"
                    href="world-test-championship/overview.html"
                    target="_blank"
                    rel="noopener"
                  >
                    World Test Championship
                  </a>
                </li>
              </ul>
            </nav>
          </section>
          <section className="main-navigation__wrapper">
            <div className="main-navigation__header u-hide-desktop">
              <Link
                to={`/`}
                className="main-navigation__logo"
                title="label.returnToHomepage"
              >
                <span className="icn icn-logo-icc-nav icn_logo_main"></span>
                <span className="u-screen-reader">label.ICCHome</span>
              </Link>

              <nav
                id=""
                className="main-navigation__desktop-list js-desktop-nav"
                aria-label="Header Navigation"
                role="navigation"
              >
                <header className="linked-list__header u-show-desktop">
                  <span className="js-mobile-nav-btn">
                    <svg
                      className="icon linked-list__header-close-icn"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-cross"
                      ></use>
                    </svg>
                  </span>
                </header>
                <ul className="linked-list js-dynamic-list">
                  <li className="linked-list__item">
                    <Link className="linked-list__link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="linked-list__item">
                    <Link className="linked-list__link" to="news.html">
                      Teams
                    </Link>
                  </li>

                  <li className="linked-list__item">
                    <Link className="linked-list__link" to="/gallery">
                      Gallery
                    </Link>
                  </li>

                  <li className="linked-list__item">
                    <Link className="linked-list__link" to="/blogs">
                      Blogs
                    </Link>
                  </li>

                  {/* Rem */}
                  <li className="linked-list__item no-border u-show-desktop  ">
                    <span className="linked-list__title">Explore ICC</span>
                  </li>
                  <li className="linked-list__item linked-list__item--promo u-show-desktop">
                    <section className="app-promo">
                      <div className="app-promo__top">
                        <span className="app-promo__icon icn icn-app-icon"></span>
                        <span className="app-promo__text">
                          Download the official ICC App today
                        </span>
                      </div>
                      <div className="app-promo__bottom">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://itunes.apple.com/gb/app/icc-world-twenty20-india-2016/id956440606?mt=8"
                          className="app-promo__cta icn icn-apple-badge"
                        ></a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://play.google.com/store/apps/details?id=com.pl.cwc_2015&amp;hl=en_GB"
                          className="app-promo__cta icn icn-android-badge"
                        ></a>
                      </div>
                    </section>
                  </li>
                  <li className="linked-list__item linked-list__item--social u-show-desktop">
                    <div className="main-navigation__social-container">
                      <nav className="social-follow ">
                        <h6 className="social-follow__title">Follow Us</h6>
                        <a
                          href="https://www.facebook.com/icc/"
                          target="_blank"
                          rel="noreferrer"
                          className="social-follow__item social-follow__item--facebook"
                        >
                          <svg className="icon " aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-facebook-color"
                            ></use>
                          </svg>
                          <span className="u-screen-reader">
                            label.follow.facebook
                          </span>
                        </a>
                        <a
                          href="https://twitter.com/ICC"
                          target="_blank"
                          rel="noreferrer"
                          className="social-follow__item social-follow__item--twitter"
                        >
                          <svg className="icon " aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-twitter-color"
                            ></use>
                          </svg>
                          <span className="u-screen-reader">
                            label.follow.twitter
                          </span>
                        </a>
                        <a
                          href="https://www.instagram.com/icc/"
                          target="_blank"
                          rel="noreferrer"
                          className="social-follow__item social-follow__item--instagram"
                        >
                          <svg className="icon " aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-instagram"
                            ></use>
                          </svg>
                          <span className="u-screen-reader">
                            label.follow.instagram
                          </span>
                        </a>
                        <a
                          href="https://www.youtube.com/user/CricketICC?cbrd=1"
                          target="_blank"
                          rel="noreferrer"
                          className="social-follow__item social-follow__item--youtube"
                        >
                          <svg className="icon " aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-youtube-color"
                            ></use>
                          </svg>
                          <span className="u-screen-reader">
                            label.follow.youtube
                          </span>
                        </a>
                      </nav>

                      <svg
                        style={{ width: 0, height: 0, position: "absolute" }}
                        aria-hidden="true"
                        focusable="false"
                      >
                        <linearGradient
                          id="instagram"
                          x2="1"
                          y2="1"
                          gradientTransform="rotate(45)"
                        >
                          <stop offset="0%" stopColor="#4c68d6" />
                          <stop offset="33%" stopColor="#b22d98" />
                          <stop offset="65%" stopColor="#e85a50" />
                          <stop offset="100%" stopColor="#fbbb59" />
                        </linearGradient>
                      </svg>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="main-navigation__mobile u-show-desktop"
              data-widget="mobile-navigation"
            >
              <Link
                to={`/`}
                className="main-navigation__logo"
                title="label.returnToHomepage"
              >
                <span className="icn icn-logo-icc-nav icn_logo_main"></span>
                <span className="u-screen-reader">label.ICCHome</span>
              </Link>

              <div className="main-navigation__sub-menu">
                <nav className="sub-menu">
                  <Link
                    to={`/`}
                    className="main"
                    title="label.returnToHomepage"
                  >
                    <span className="icn icn-logo-icc-nav icn_logo_main"></span>
                    <span className="u-screen-reader">label.ICCHome</span>
                  </Link>
                  <a
                    className="sub-menu__link "
                    href="rankings/mens/overview.html"
                  >
                    Rankings
                  </a>
                  <a className="sub-menu__link " href="news.html">
                    News
                  </a>
                  <a className="sub-menu__link " href="https://welcome.icc.tv/">
                    ICC.tv
                  </a>
                </nav>
              </div>

              <button
                className="hamburger js-mobile-nav-btn"
                type="button"
                aria-label="Menu"
                aria-controls="mobile-menu"
              >
                <span className="hamburger__line hamburger__line--top"></span>
                <span className="hamburger__line hamburger__line--middle"></span>
                <span className="hamburger__line hamburger__line--bottom"></span>
                <span className="u-screen-reader">
                  label.toggleMobileNavigation
                </span>
              </button>

              <nav
                id="mobile-menu"
                className="main-navigation__mobile-list js-mobile-nav"
                aria-label="Header Navigation"
                role="navigation"
              >
                <header className="linked-list__header u-show-desktop">
                  <span className="js-mobile-nav-btn">
                    <svg
                      className="icon linked-list__header-close-icn"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-cross"
                      ></use>
                    </svg>
                  </span>
                </header>
                <ul className="linked-list js-dynamic-list">
                  <li className="linked-list__item  has-children ">
                    <button
                      className="linked-list__dropdown-label js-dropdown-btn"
                      aria-haspopup="true"
                    >
                      Scores
                      <svg
                        className="icon linked-list__dropdown-has-children"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                        ></use>
                      </svg>
                    </button>

                    <ul
                      className="linked-list__dropdown"
                      role="group"
                      aria-expanded="false"
                      aria-hidden="true"
                    >
                      <header className="linked-list__dropdown-header u-show-desktop">
                        <button
                          className="linked-list__back-btn js-back-btn"
                          aria-label="Return to previous menu level"
                        >
                          <svg className="icon " aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                            ></use>
                          </svg>
                          Scores
                        </button>
                      </header>

                      <li className="linked-list__item  has-children ">
                        <button
                          className="linked-list__dropdown-label js-dropdown-btn"
                          aria-haspopup="true"
                        >
                          Men's
                          <svg
                            className="icon linked-list__dropdown-has-children"
                            aria-hidden="true"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                            ></use>
                          </svg>
                        </button>

                        <ul
                          className="linked-list__dropdown"
                          role="group"
                          aria-expanded="false"
                          aria-hidden="true"
                        >
                          <header className="linked-list__dropdown-header u-show-desktop">
                            <button
                              className="linked-list__back-btn js-back-btn"
                              aria-label="Return to previous menu level"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                                ></use>
                              </svg>
                              Men's
                            </button>
                          </header>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="mens-schedule/list.html"
                            >
                              Fixtures
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="live-cricket/mens-results.html"
                            >
                              Results
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="linked-list__item  has-children ">
                        <button
                          className="linked-list__dropdown-label js-dropdown-btn"
                          aria-haspopup="true"
                        >
                          Women's
                          <svg
                            className="icon linked-list__dropdown-has-children"
                            aria-hidden="true"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                            ></use>
                          </svg>
                        </button>

                        <ul
                          className="linked-list__dropdown"
                          role="group"
                          aria-expanded="false"
                          aria-hidden="true"
                        >
                          <header className="linked-list__dropdown-header u-show-desktop">
                            <button
                              className="linked-list__back-btn js-back-btn"
                              aria-label="Return to previous menu level"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                                ></use>
                              </svg>
                              Women's
                            </button>
                          </header>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="womens-schedule/list.html"
                            >
                              Fixtures
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="live-cricket/womens-results.html"
                            >
                              Results
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="linked-list__item   ">
                        <a
                          className="linked-list__link "
                          href="live-cricket/live.html"
                        >
                          Live Scores
                        </a>
                      </li>

                      <li className="linked-list__item linked-list__item--wider u-hide-desktop"></li>
                      <li className="linked-list__item linked-list__item--full-width u-hide-desktop">
                        <div className="main-navigation__social-container">
                          <nav className="social-follow ">
                            <h6 className="social-follow__title">Follow Us</h6>
                            <a
                              href="https://www.facebook.com/icc/"
                              target="_blank"
                              rel="noreferrer"
                              className="social-follow__item social-follow__item--facebook"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-facebook-color"
                                ></use>
                              </svg>
                              <span className="u-screen-reader">
                                label.follow.facebook
                              </span>
                            </a>
                            <a
                              href="https://twitter.com/ICC"
                              target="_blank"
                              rel="noreferrer"
                              className="social-follow__item social-follow__item--twitter"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-twitter-color"
                                ></use>
                              </svg>
                              <span className="u-screen-reader">
                                label.follow.twitter
                              </span>
                            </a>
                            <a
                              href="https://www.instagram.com/icc/"
                              target="_blank"
                              rel="noreferrer"
                              className="social-follow__item social-follow__item--instagram"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-instagram"
                                ></use>
                              </svg>
                              <span className="u-screen-reader">
                                label.follow.instagram
                              </span>
                            </a>
                            <a
                              href="https://www.youtube.com/user/CricketICC?cbrd=1"
                              target="_blank"
                              rel="noreferrer"
                              className="social-follow__item social-follow__item--youtube"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-youtube-color"
                                ></use>
                              </svg>
                              <span className="u-screen-reader">
                                label.follow.youtube
                              </span>
                            </a>
                          </nav>

                          <svg
                            style={{
                              width: 0,
                              height: 0,
                              position: "absolute",
                            }}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <linearGradient
                              id="instagram"
                              x2="1"
                              y2="1"
                              gradientTransform="rotate(45)"
                            >
                              <stop offset="0%" stopColor="#4c68d6" />
                              <stop offset="33%" stopColor="#b22d98" />
                              <stop offset="65%" stopColor="#e85a50" />
                              <stop offset="100%" stopColor="#fbbb59" />
                            </linearGradient>
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="linked-list__item  has-children ">
                    <button
                      className="linked-list__dropdown-label js-dropdown-btn"
                      aria-haspopup="true"
                    >
                      Rankings
                      <svg
                        className="icon linked-list__dropdown-has-children"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                        ></use>
                      </svg>
                    </button>

                    <ul
                      className="linked-list__dropdown"
                      role="group"
                      aria-expanded="false"
                      aria-hidden="true"
                    >
                      <header className="linked-list__dropdown-header u-show-desktop">
                        <button
                          className="linked-list__back-btn js-back-btn"
                          aria-label="Return to previous menu level"
                        >
                          <svg className="icon " aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                            ></use>
                          </svg>
                          Rankings
                        </button>
                      </header>

                      <li className="linked-list__item  has-children ">
                        <button
                          className="linked-list__dropdown-label js-dropdown-btn"
                          aria-haspopup="true"
                        >
                          Men's
                          <svg
                            className="icon linked-list__dropdown-has-children"
                            aria-hidden="true"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                            ></use>
                          </svg>
                        </button>

                        <ul
                          className="linked-list__dropdown"
                          role="group"
                          aria-expanded="false"
                          aria-hidden="true"
                        >
                          <header className="linked-list__dropdown-header u-show-desktop">
                            <button
                              className="linked-list__back-btn js-back-btn"
                              aria-label="Return to previous menu level"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                                ></use>
                              </svg>
                              Men's
                            </button>
                          </header>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="rankings/mens/overview.html"
                            >
                              Overview
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="rankings/mens/team-rankings/test.html"
                            >
                              Team Rankings
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="rankings/mens/player-rankings/test.html"
                            >
                              Players Rankings
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="rankings/mens/rankings-predictor/test.html"
                            >
                              Team Rankings Predictor
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="linked-list__item  has-children ">
                        <button
                          className="linked-list__dropdown-label js-dropdown-btn"
                          aria-haspopup="true"
                        >
                          Women's
                          <svg
                            className="icon linked-list__dropdown-has-children"
                            aria-hidden="true"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                            ></use>
                          </svg>
                        </button>

                        <ul
                          className="linked-list__dropdown"
                          role="group"
                          aria-expanded="false"
                          aria-hidden="true"
                        >
                          <header className="linked-list__dropdown-header u-show-desktop">
                            <button
                              className="linked-list__back-btn js-back-btn"
                              aria-label="Return to previous menu level"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                                ></use>
                              </svg>
                              Women's
                            </button>
                          </header>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="rankings/womens/overview.html"
                            >
                              Overview
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="rankings/womens/team-rankings/odi.html"
                            >
                              Team Rankings
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="rankings/womens/player-rankings/odi.html"
                            >
                              Player Rankings
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="linked-list__item  has-children ">
                        <button
                          className="linked-list__dropdown-label js-dropdown-btn"
                          aria-haspopup="true"
                        >
                          <svg
                            className="icon linked-list__dropdown-has-children"
                            aria-hidden="true"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                            ></use>
                          </svg>
                        </button>

                        <ul
                          className="linked-list__dropdown"
                          role="group"
                          aria-expanded="false"
                          aria-hidden="true"
                        >
                          <header className="linked-list__dropdown-header u-show-desktop">
                            <button
                              className="linked-list__back-btn js-back-btn"
                              aria-label="Return to previous menu level"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                                ></use>
                              </svg>
                            </button>
                          </header>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="rankings/mens/player-rankings/comparison.html"
                            >
                              Player Head to Head
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="rankings/about.html"
                            >
                              About Rankings
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="rankings/faqs.html"
                            >
                              Rankings FAQs
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="linked-list__item linked-list__item--wider u-hide-desktop"></li>
                      <li className="linked-list__item linked-list__item--full-width u-hide-desktop">
                        <div className="main-navigation__social-container">
                          <nav className="social-follow ">
                            <h6 className="social-follow__title">Follow Us</h6>
                            <a
                              href="https://www.facebook.com/icc/"
                              target="_blank"
                              rel="noreferrer"
                              className="social-follow__item social-follow__item--facebook"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-facebook-color"
                                ></use>
                              </svg>
                              <span className="u-screen-reader">
                                label.follow.facebook
                              </span>
                            </a>
                            <a
                              href="https://twitter.com/ICC"
                              target="_blank"
                              rel="noreferrer"
                              className="social-follow__item social-follow__item--twitter"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-twitter-color"
                                ></use>
                              </svg>
                              <span className="u-screen-reader">
                                label.follow.twitter
                              </span>
                            </a>
                            <a
                              href="https://www.instagram.com/icc/"
                              target="_blank"
                              rel="noreferrer"
                              className="social-follow__item social-follow__item--instagram"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-instagram"
                                ></use>
                              </svg>
                              <span className="u-screen-reader">
                                label.follow.instagram
                              </span>
                            </a>
                            <a
                              href="https://www.youtube.com/user/CricketICC?cbrd=1"
                              target="_blank"
                              rel="noreferrer"
                              className="social-follow__item social-follow__item--youtube"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-youtube-color"
                                ></use>
                              </svg>
                              <span className="u-screen-reader">
                                label.follow.youtube
                              </span>
                            </a>
                          </nav>

                          <svg
                            style={{
                              width: 0,
                              height: 0,
                              position: "absolute",
                            }}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <linearGradient
                              id="instagram"
                              x2="1"
                              y2="1"
                              gradientTransform="rotate(45)"
                            >
                              <stop offset="0%" stopColor="#4c68d6" />
                              <stop offset="33%" stopColor="#b22d98" />
                              <stop offset="65%" stopColor="#e85a50" />
                              <stop offset="100%" stopColor="#fbbb59" />
                            </linearGradient>
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="linked-list__item  has-children ">
                    <button
                      className="linked-list__dropdown-label js-dropdown-btn"
                      aria-haspopup="true"
                    >
                      Events
                      <svg
                        className="icon linked-list__dropdown-has-children"
                        aria-hidden="true"
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                        ></use>
                      </svg>
                    </button>

                    <ul
                      className="linked-list__dropdown"
                      role="group"
                      aria-expanded="false"
                      aria-hidden="true"
                    >
                      <header className="linked-list__dropdown-header u-show-desktop">
                        <button
                          className="linked-list__back-btn js-back-btn"
                          aria-label="Return to previous menu level"
                        >
                          <svg className="icon " aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                            ></use>
                          </svg>
                          Events
                        </button>
                      </header>

                      <li className="linked-list__item  has-children ">
                        <button
                          className="linked-list__dropdown-label js-dropdown-btn"
                          aria-haspopup="true"
                        >
                          Men's Events
                          <svg
                            className="icon linked-list__dropdown-has-children"
                            aria-hidden="true"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                            ></use>
                          </svg>
                        </button>

                        <ul
                          className="linked-list__dropdown"
                          role="group"
                          aria-expanded="false"
                          aria-hidden="true"
                        >
                          <header className="linked-list__dropdown-header u-show-desktop">
                            <button
                              className="linked-list__back-btn js-back-btn"
                              aria-label="Return to previous menu level"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                                ></use>
                              </svg>
                              Men's Events
                            </button>
                          </header>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="https://www.t20worldcup.com/"
                            >
                              ICC T20 World Cup
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="world-test-championship.html"
                            >
                              ICC World Test Championship
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="u19-world-cup/index.html"
                            >
                              ICC U19 Cricket World Cup
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="cricket-world-cup-super-league/fixtures.html"
                            >
                              ICC CWC Super League
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="cricket-world-cup-challenge-league/news.html"
                            >
                              ICC CWC Challenge League
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="cricket-world-cup-league-two/news.html"
                            >
                              ICC CWC League 2
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="linked-list__item  has-children ">
                        <button
                          className="linked-list__dropdown-label js-dropdown-btn"
                          aria-haspopup="true"
                        >
                          Women's Events
                          <svg
                            className="icon linked-list__dropdown-has-children"
                            aria-hidden="true"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                            ></use>
                          </svg>
                        </button>

                        <ul
                          className="linked-list__dropdown"
                          role="group"
                          aria-expanded="false"
                          aria-hidden="true"
                        >
                          <header className="linked-list__dropdown-header u-show-desktop">
                            <button
                              className="linked-list__back-btn js-back-btn"
                              aria-label="Return to previous menu level"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"
                                ></use>
                              </svg>
                              Women's Events
                            </button>
                          </header>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="https://womens.t20worldcup.com//"
                            >
                              ICC T20 World Cup
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="https://www.cricketworldcup.com/"
                            >
                              ICC Cricket World Cup
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="womens-u19-world-cup/index.html"
                            >
                              ICC U19 T20 World Cup
                            </a>
                          </li>

                          <li className="linked-list__item   ">
                            <a
                              className="linked-list__link "
                              href="womens-championship.html"
                            >
                              ICC Women's Championship
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="linked-list__item linked-list__item--wider u-hide-desktop"></li>
                      <li className="linked-list__item linked-list__item--full-width u-hide-desktop">
                        <div className="main-navigation__social-container">
                          <nav className="social-follow ">
                            <h6 className="social-follow__title">Follow Us</h6>
                            <a
                              href="https://www.facebook.com/icc/"
                              target="_blank"
                              rel="noreferrer"
                              className="social-follow__item social-follow__item--facebook"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-facebook-color"
                                ></use>
                              </svg>
                              <span className="u-screen-reader">
                                label.follow.facebook
                              </span>
                            </a>
                            <a
                              href="https://twitter.com/ICC"
                              target="_blank"
                              rel="noreferrer"
                              className="social-follow__item social-follow__item--twitter"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-twitter-color"
                                ></use>
                              </svg>
                              <span className="u-screen-reader">
                                label.follow.twitter
                              </span>
                            </a>
                            <a
                              href="https://www.instagram.com/icc/"
                              target="_blank"
                              rel="noreferrer"
                              className="social-follow__item social-follow__item--instagram"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-instagram"
                                ></use>
                              </svg>
                              <span className="u-screen-reader">
                                label.follow.instagram
                              </span>
                            </a>
                            <a
                              href="https://www.youtube.com/user/CricketICC?cbrd=1"
                              target="_blank"
                              rel="noreferrer"
                              className="social-follow__item social-follow__item--youtube"
                            >
                              <svg className="icon " aria-hidden="true">
                                <use
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-youtube-color"
                                ></use>
                              </svg>
                              <span className="u-screen-reader">
                                label.follow.youtube
                              </span>
                            </a>
                          </nav>

                          <svg
                            style={{
                              width: 0,
                              height: 0,
                              position: "absolute",
                            }}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <linearGradient
                              id="instagram"
                              x2="1"
                              y2="1"
                              gradientTransform="rotate(45)"
                            >
                              <stop offset="0%" stopColor="#4c68d6" />
                              <stop offset="33%" stopColor="#b22d98" />
                              <stop offset="65%" stopColor="#e85a50" />
                              <stop offset="100%" stopColor="#fbbb59" />
                            </linearGradient>
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="linked-list__item no-border u-show-desktop  ">
                    <span className="linked-list__title">Explore ICC</span>
                  </li>

                  <li className="linked-list__item no-border theme theme-t20wc  ">
                    <a
                      className="linked-list__link "
                      href="https://t20worldcup.com/"
                    >
                      T20 World Cup
                      <svg className="icon external-link" aria-hidden="true">
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-external"
                        ></use>
                      </svg>
                    </a>
                  </li>

                  <li className="linked-list__item no-border theme theme-wcwc  ">
                    <a
                      className="linked-list__link "
                      href="https://cricketworldcup.com/"
                    >
                      Womens Cricket World Cup
                      <svg className="icon external-link" aria-hidden="true">
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-external"
                        ></use>
                      </svg>
                    </a>
                  </li>
                  <li className="linked-list__item linked-list__item--promo u-show-desktop">
                    <section className="app-promo">
                      <div className="app-promo__top">
                        <span className="app-promo__icon icn icn-app-icon"></span>
                        <span className="app-promo__text">
                          Download the official ICC App today
                        </span>
                      </div>
                      <div className="app-promo__bottom">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://itunes.apple.com/gb/app/icc-world-twenty20-india-2016/id956440606?mt=8"
                          className="app-promo__cta icn icn-apple-badge"
                        ></a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://play.google.com/store/apps/details?id=com.pl.cwc_2015&amp;hl=en_GB"
                          className="app-promo__cta icn icn-android-badge"
                        ></a>
                      </div>
                    </section>
                  </li>
                  <li className="linked-list__item linked-list__item--social u-show-desktop">
                    <div className="main-navigation__social-container">
                      <nav className="social-follow ">
                        <h6 className="social-follow__title">Follow Us</h6>
                        <a
                          href="https://www.facebook.com/icc/"
                          target="_blank"
                          rel="noreferrer"
                          className="social-follow__item social-follow__item--facebook"
                        >
                          <svg className="icon " aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-facebook-color"
                            ></use>
                          </svg>
                          <span className="u-screen-reader">
                            label.follow.facebook
                          </span>
                        </a>
                        <a
                          href="https://twitter.com/ICC"
                          target="_blank"
                          rel="noreferrer"
                          className="social-follow__item social-follow__item--twitter"
                        >
                          <svg className="icon " aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-twitter-color"
                            ></use>
                          </svg>
                          <span className="u-screen-reader">
                            label.follow.twitter
                          </span>
                        </a>
                        <a
                          href="https://www.instagram.com/icc/"
                          target="_blank"
                          rel="noreferrer"
                          className="social-follow__item social-follow__item--instagram"
                        >
                          <svg className="icon " aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-instagram"
                            ></use>
                          </svg>
                          <span className="u-screen-reader">
                            label.follow.instagram
                          </span>
                        </a>
                        <a
                          href="https://www.youtube.com/user/CricketICC?cbrd=1"
                          target="_blank"
                          rel="noreferrer"
                          className="social-follow__item social-follow__item--youtube"
                        >
                          <svg className="icon " aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-youtube-color"
                            ></use>
                          </svg>
                          <span className="u-screen-reader">
                            label.follow.youtube
                          </span>
                        </a>
                      </nav>

                      <svg
                        style={{ width: 0, height: 0, position: "absolute" }}
                        aria-hidden="true"
                        focusable="false"
                      >
                        <linearGradient
                          id="instagram"
                          x2="1"
                          y2="1"
                          gradientTransform="rotate(45)"
                        >
                          <stop offset="0%" stopColor="#4c68d6" />
                          <stop offset="33%" stopColor="#b22d98" />
                          <stop offset="65%" stopColor="#e85a50" />
                          <stop offset="100%" stopColor="#fbbb59" />
                        </linearGradient>
                      </svg>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </header>
      </div>
    </>
  );
};
export default Header;
