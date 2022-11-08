const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="partners">
          <div className="partners__top-level">
            <section className="partners__container">
              <div className="partners__list partners__list--large">
                <div className="partners__item">
                  <a
                    href="https://www.facebook.com/GardenStallionsClub/"
                    className="partners__link"
                    aria-label="Bira 91"
                    target="_blank"
                    rel="noreferrer"
                    title="Bira 91"
                  >
                    <img
                      className="partners__image"
                      src="/sponsers/GSC.jpg"
                      alt="Bira 91"
                    />
                  </a>
                </div>
                <div className="partners__item">
                  <a
                    href="https://www.facebook.com/zonetechpk"
                    className="partners__link"
                    aria-label="Eatfit"
                    target="_blank"
                    rel="noreferrer"
                    title="Eatfit"
                  >
                    <img
                      className="partners__image"
                      src="/sponsers/ZT.png"
                      alt="Eatfit"
                    />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* <section className="footer__main">
          <div className="flxex_ftrow">
            <div className="ft_col">
              <div className="ft_headeing">
                <h4>KHELO KRICKET</h4>
              </div>
              <ul className="ft_ul">
                <li>Men’s Cricket</li>
                <li>Women’s Cricket</li>
                <li>Tournaments</li>
                <li>Teams</li>
              </ul>
            </div>
            <div className="ft_col">
              <div className="ft_headeing">
                <h4>DEKHO KRICKET</h4>
              </div>
              <ul className="ft_ul">
                <li>Video Gallery</li>
                <li>Photo Gallery</li>
              </ul>
            </div>
            <div className="ft_col">
              <div className="ft_headeing">
                <h4>More</h4>
              </div>
              <ul className="ft_ul">
                <li>News</li>
                <li>Team Registration</li>
              </ul>
            </div>
            <div className="ft_col">
              <div className="ft_headeing">
                <h4>Privacy</h4>
              </div>
              <ul className="ft_ul">
                <li>Leagal Notice</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </section> */}
        <div className="footer__main border-0">
          <span></span>
          <div className="footer__social">
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
                <span className="u-screen-reader">label.follow.facebook</span>
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
                <span className="u-screen-reader">label.follow.instagram</span>
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
        </div>
        <div className="footer__corporate">
          <span className="footer__copyright">2022 © cricshizz.com.pk</span>
        </div>
      </footer>
    </>
  );
};
export default Footer;
