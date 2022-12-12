import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, SetisOpen] = useState(false);
  return (
    <>
      <div className="main-navigation__container js-will-glue">
        <header className="main-navigation">
          {/* Top Bar */}
          <section className="main-navigation__top-bar">
            <nav className="site-tabs">
              <ul className="site-tabs__list footer__corporate pt-10px pb-10px">
                <span className="footer__copyright">
                  2022 © cricshizz.com.pk
                </span>
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
                <span className="u-screen-reader">label.CricshizzHome</span>
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
                        xlinkHref="/resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-cross"
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
                  {/* <li className="linked-list__item">
                    <Link className="linked-list__link" to="/gallery">
                      Gallery
                    </Link>
                  </li> */}

                  <li className="linked-list__item">
                    <Link className="linked-list__link" to="/blogs">
                      Blogs
                    </Link>
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
                <span className="u-screen-reader">label.CricshizzHome</span>
              </Link>

              <div className="main-navigation__sub-menu">
                <nav className="sub-menu">
                  <Link
                    to={`/`}
                    className="main"
                    title="label.returnToHomepage"
                  >
                    <span className="icn icn-logo-icc-nav icn_logo_main"></span>
                    <span className="u-screen-reader">label.CricshizzHome</span>
                  </Link>
                </nav>
              </div>
              <button
                className="hamburger js-mobile-nav-btn"
                type="button"
                aria-label="Menu"
                onClick={() => {
                  SetisOpen(true);
                }}
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
                className={`main-navigation__mobile-list js-mobile-nav ${
                  isOpen === true ? "is-open" : ""
                }`}
                aria-label="Header Navigation"
                role="navigation"
              >
                <header className="linked-list__header u-show-desktop">
                  <span
                    className="js-mobile-nav-btn"
                    onClick={() => {
                      SetisOpen(false);
                    }}
                  >
                    <svg
                      className="icon linked-list__header-close-icn"
                      aria-hidden="true"
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="/resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-cross"
                      ></use>
                    </svg>
                  </span>
                </header>
                <ul className="linked-list js-dynamic-list">
                  <li className="linked-list__item">
                    <Link to={`/`}>
                      <button
                        className="linked-list__dropdown-label js-dropdown-btn"
                        aria-haspopup="true"
                      >
                        Home
                      </button>
                    </Link>
                  </li>
                  {/* <li className="linked-list__item">
                    <Link to={`/gallery`}>
                      <button
                        className="linked-list__dropdown-label js-dropdown-btn"
                        aria-haspopup="true"
                      >
                        Gallery
                      </button>
                    </Link>
                  </li> */}
                  <li className="linked-list__item">
                    <Link to={`/blogs`}>
                      <button
                        className="linked-list__dropdown-label js-dropdown-btn"
                        aria-haspopup="true"
                      >
                        Blogs
                      </button>
                    </Link>
                  </li>

                  <li className="linked-list__item linked-list__item--social u-show-desktop">
                    <div className="main-navigation__social-container">
                      <nav className="social-follow ">
                        <h6 className="social-follow__title">Follow Us</h6>
                        <a
                          href="https://www.facebook.com/cricshizz/"
                          target="_blank"
                          rel="noreferrer"
                          className="social-follow__item social-follow__item--facebook"
                        >
                          <svg className="icon " aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-facebook-color"
                            ></use>
                          </svg>
                          <span className="u-screen-reader">
                            label.follow.facebook
                          </span>
                        </a>
                        <a
                          href="https://www.instagram.com/cricshizz/"
                          target="_blank"
                          rel="noreferrer"
                          className="social-follow__item social-follow__item--instagram"
                        >
                          <svg className="icon " aria-hidden="true">
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="/resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-instagram"
                            ></use>
                          </svg>
                          <span className="u-screen-reader">
                            label.follow.instagram
                          </span>
                        </a>
                      </nav>
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
