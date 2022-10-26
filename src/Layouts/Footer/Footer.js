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
                    href="https://www.bira91.com/"
                    className="partners__link"
                    aria-label="Bira 91"
                    target="_blank"
                    rel="noreferrer"
                    title="Bira 91"
                  >
                    <img
                      className="partners__image"
                      src="https://resources.pulse.icc-cricket.com/photo-resources/2022/06/30/ceabcea6-36b3-40c5-ab00-7ad8b66ecd73/nissan-2.png?width=142&height=46"
                      alt="Bira 91"
                    />
                  </a>
                </div>
                <div className="partners__item">
                  <a
                    href="https://www.eatfit.in/"
                    className="partners__link"
                    aria-label="Eatfit"
                    target="_blank"
                    rel="noreferrer"
                    title="Eatfit"
                  >
                    <img
                      className="partners__image"
                      src="https://resources.pulse.icc-cricket.com/photo-resources/2022/06/30/c1afea15-4875-4cba-9710-547729daa841/Frame-235.png?width=142&height=46"
                      alt="Eatfit"
                    />
                  </a>
                </div>
                <div className="partners__item">
                  <a
                    href="https://www.coca-colaindia.com/brands/thums-up"
                    className="partners__link"
                    aria-label="Coca Cola"
                    title="Coca Cola"
                  >
                    <img
                      className="partners__image"
                      src="https://resources.pulse.icc-cricket.com/photo-resources/2022/06/30/8bb6e96d-2b69-4d8e-acc0-568602baba2d/Frame-234.png?width=142&height=46"
                      alt="Coca Cola"
                    />
                  </a>
                </div>
                <div className="partners__item">
                  <a
                    href="https://upstox.com/"
                    className="partners__link"
                    aria-label="Upstox"
                    target="_blank"
                    rel="noreferrer"
                    title="Upstox"
                  >
                    <img
                      className="partners__image"
                      src="https://resources.pulse.icc-cricket.com/photo-resources/2022/06/30/9b3ea6a2-25f4-478e-b8aa-0e1b7d3d0e2a/Frame-237.png?width=142&height=46"
                      alt="Upstox"
                    />
                  </a>
                </div>
                <div className="partners__item">
                  <a
                    href="https://postpe.app/"
                    className="partners__link"
                    aria-label="PostPe"
                    target="_blank"
                    rel="noreferrer"
                    title="PostPe"
                  >
                    <img
                      className="partners__image"
                      src="https://resources.pulse.icc-cricket.com/photo-resources/2022/10/14/0b90e397-2995-4cd9-b75f-4d4fcef278e8/Frame.png?width=142&height=46"
                      alt="PostPe"
                    />
                  </a>
                </div>
                <div className="partners__item">
                  <a
                    href="https://ftx.com/"
                    className="partners__link"
                    aria-label="FTX"
                    target="_blank"
                    rel="noreferrer"
                    title="FTX"
                  >
                    <img
                      className="partners__image"
                      src="https://resources.pulse.icc-cricket.com/photo-resources/2022/06/30/d9fb726d-2cbd-41c8-9aaf-bd94f37a8e4a/Frame-236.png?width=142&height=46"
                      alt="FTX"
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
                href="https://www.facebook.com/icc/"
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
                href="https://twitter.com/ICC"
                target="_blank"
                rel="noreferrer"
                className="social-follow__item social-follow__item--twitter"
              >
                <svg className="icon " aria-hidden="true">
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="/resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-twitter-color"
                  ></use>
                </svg>
                <span className="u-screen-reader">label.follow.twitter</span>
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
                    xlinkHref="/resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-instagram"
                  ></use>
                </svg>
                <span className="u-screen-reader">label.follow.instagram</span>
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
                    xlinkHref="/resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-youtube-color"
                  ></use>
                </svg>
                <span className="u-screen-reader">label.follow.youtube</span>
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
