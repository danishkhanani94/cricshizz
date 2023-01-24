import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Teams = (props) => {
    const [Team, SetTeams] = useState([]);
    const [limitStart, SetLimitStart] = useState(0);
    const [limit, SetLimit] = useState(props.all === true ? 20 : 8);
    const [more, SetMore] = useState(true);

    async function getTeam(s, e) {
        await axios
            .get(`${process.env.REACT_APP_SERVER_URL}team/all/${s}/${e}`)
            .then((res) => {
                SetTeams(Team.concat(res.data[0].Data));
                if (!res.data[0].Data) {
                    SetMore(false);
                }
                SetLimit(limit + 20);
                SetLimitStart(limitStart + 20);
            });
    }
    async function getTeamSearch(s, e, search) {
        await axios
            .get(`${process.env.REACT_APP_SERVER_URL}team/all/${s}/${e}/${search}`)
            .then((res) => {
                SetTeams(res.data[0].Data);
            });
    }
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        getTeam(limitStart, limit);
        window.$(document).ready(function () {
            var owl = window.$('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                nav: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 5,
                        loop: true
                    }
                }
            })
            owl.owlCarousel();
            window.$('.customNextBtn').click(function () {
                owl.trigger('next.owl.carousel');
            })
            window.$('.customPrevBtn').click(function () {
                owl.trigger('prev.owl.carousel', [300]);
            })
        });
    }, []);

    const fetchMoreData = () => {
        getTeam(limitStart, limit);
    };

    const TeamCard = ({ data }) => {
        return (
            <>
                <div
                    className="content-hero__item-container content-hero__item-container--cards"
                    data-itemlist-id="2841517"
                >
                    <article
                        className={`media-thumbnail media-thumbnail--no-bg-responsive media-thumbnail--show-publish-date no-b-radius-n`}
                        data-widget="lazy-load-images"
                    >
                        <header className="media-thumbnail__image-container">
                            <div className="lazy-image is-loaded">
                                <div className="js-lazy-load u-observed lazy-image-wrapper">
                                    <picture className="object-fit-cover-picture">
                                        <img
                                            className="js-faded-image fade-in-on-load object-fit-cover-picture__img"
                                            src={data.banner === "" ? `${process.env.REACT_APP_BUCKET_URL}team-banner.jpg` : `${process.env.REACT_APP_BUCKET_URL}${data.banner}`}
                                        />
                                    </picture>
                                </div>
                            </div>
                        </header>
                        <div className="media-thumbnail__meta nbn_psa">
                            <div className="team-prof-lgo">
                                <img src={data.logo === "" ? `${process.env.REACT_APP_BUCKET_URL}player-1.jpg` : `${process.env.REACT_APP_BUCKET_URL}${data.logo}`} /></div>
                            <h1 className="media-thumbnail__heading team-list__name">{data.name}</h1>
                            <Link to={`/team/${data.id}`}><button className="btn tl_tp_btn">Team Profile</button></Link>
                            <div className="bg-clo-temed" style={{ background: `linear-gradient(0deg,${data.color},${data.color} 75%,hsla(0,0%,100%,0))` }}></div>
                        </div>
                    </article>
                </div>
            </>
        );
    };

    const LitTeam = (props) => {
        return (
            <TeamCard data={props.data} />
        );
    };

    return (
        <>
            {props.all === true ? (
                <header className="page-header">
                    <div className="wrapper">
                        <div className="col-12">
                            <div className="page-header__banner mt-10px text-align-center">
                                <h1 className="page-title">Teams </h1>
                            </div>
                            <div className="text-align-center">
                                <input
                                    type="text"
                                    className="search_nscc"
                                    onChange={(e) => {
                                        getTeamSearch(0, 200, e.target.value);
                                    }}
                                    placeholder="Search By Name  ..."
                                />
                            </div>
                        </div>
                    </div>
                </header>
            ) : (
                ""
            )}
            <section
                className={`${props.all === true
                    ? "content-hero"
                    : "content-listing theme-highlight widget"
                    } `}
            >
                <div className="constraint-wrapper">
                    <header className="widget-header">
                        {props.all === true ? (
                            ""
                        ) : (
                            <>
                                <h2 className="widget-header__title ">Team</h2>
                                <div className="hof-bio-carousel__carousel-controls">
                                    <Link
                                        to={`/team`}
                                        className="widget-header-link  u-hide-tablet"
                                        title="view more"
                                    >
                                        view <span>more</span>{" "}
                                        <svg
                                            className="icon widget-header-link__icon"
                                            aria-hidden="true"
                                        >
                                            <use
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-rig3ht"
                                            ></use>
                                        </svg>
                                    </Link>
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
                                </div>
                            </>
                        )}
                    </header>
                    <div
                        className={`${props.all === true ? "" : "content-hero__container"
                            }`}
                    >
                        {props.all === true ? (
                            <InfiniteScroll
                                dataLength={Team.length}
                                next={fetchMoreData}
                                hasMore={more}
                                style={{ overflow: "hidden" }}
                            >
                                <div className="content-hero__container">
                                    <div
                                        className={`content-hero__block-layout content-hero__block-layout--cards w-100 smdown_grid`}
                                    >
                                        {Team?.map((v, i) =>
                                            <LitTeam key={i} data={v} all={props.all} />
                                        )}
                                    </div>
                                </div>
                            </InfiniteScroll>
                        ) : (
                            <div className="content-hero__block-layout content-hero__block-layout--cards w-100 smdown_grid ">
                                {Team?.map((v, i) => {
                                    if (i < 8) {
                                        return <TeamCard key={i} data={v} />;
                                    }
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};
export default Teams;
