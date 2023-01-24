import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Squads = (props) => {
  const [SData, SetSData] = useState(props.team);
  useEffect(() => {
    // window.$(document).ready(function () {
    //   var owl = window.$('.owl-carousel').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     responsiveClass: true,
    //     nav: false,
    //     responsive: {
    //       0: {
    //         items: 1,
    //       },
    //       600: {
    //         items: 3,
    //       },
    //       1000: {
    //         items: 5,
    //         loop: true
    //       }
    //     }
    //   })
    //   owl.owlCarousel();
    //   window.$('.customNextBtn').click(function () {
    //     owl.trigger('next.owl.carousel');
    //   })
    //   window.$('.customPrevBtn').click(function () {
    //     owl.trigger('prev.owl.carousel', [300]);
    //   })
    // });
  }, [])
  return (
    <>
      <section className={`content-listing theme-highlight widget hof-bio-carousel widget content-slider `}>
        <div className="constraint-wrapper">
          {SData.length > 0 ? (
            <>

              <header className="hof-bio-carousel__header">
                <div className="hof-bio-carousel__logo-container">
                  <span title="ICC Hall of Fame" className="icn icn-logo-icc-hall-of-fame" />
                </div>
                {/* <div className="hof-bio-carousel__carousel-controls">
                  <div className="carousel-controls">
                    <button className="carousel-controls__button carousel-controls__button--prev js-slide-prev customPrevBtn">
                      <svg className="icon carousel-controls__con carousel-controls__icon--prev" style={{ height: `1rem` }} aria-hidden="true">
                        <path d="M1.5 9l4-4-4-4" stroke="#fff" stroke-width="2" />
                      </svg>
                      <span className="u-screen-reader">Previous</span>
                    </button>

                    <button className="carousel-controls__button carousel-controls__button--next js-slide-next  customNextBtn">
                      <svg className="icon carousel-controls__icon carousel-controls__icon--next" style={{ height: `1rem` }} aria-hidden="true">
                        <path d="M1.5 9l4-4-4-4" stroke="#fff" stroke-width="2" />
                      </svg>
                      <span className="u-screen-reader">Next</span>
                    </button>
                  </div>
                </div> */}
              </header>
              <div id="team-content">
                <div
                  id="sp-player-gallery-2715"
                  className="gallery galleryid-2715 team-list gallery-columns-3 gallery-size-sportspress-crop-medium cwou8rgh"
                >
                  {
                    SData.map((e, i) => {
                      return (
                        <div className="gallery-item" key={i} style={{ background: `linear-gradient(rgba(0, 0, 0, 0), rgba(18, 34, 87, 0.63)), url(${e.image === "" ? process.env.REACT_APP_BUCKET_URL + "player-1.jpg" : process.env.REACT_APP_BUCKET_URL + "" + e.image}) center center no-repeat`, display: `block` }}>
                          <Link to="">
                            <div className="wp-caption-text gallery-caption small-3 has-number columns">{e.name}</div>
                            <div className="wp-caption-text gallery-caption small-3 has-number columns team-player-name" style={{ color: props.color }}>{e.batting_style} , {e.bowling_style}</div>
                          </Link>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </section>

    </>
  );
};
export default Squads;
