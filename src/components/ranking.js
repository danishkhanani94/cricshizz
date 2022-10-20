const Raking = () => {
    return (
        <>
            <section className="rankings" data-widget="rankings" data-script="icc-cricket_rankings">
                <div className="constraint-wrapper">
                    <div className="rankings__container">
                        <div className="rankings__widget-header-container">
                            <div className="rankings__promo-container">

                                <div className="rankings__sponsor">

                                    <a href="https://www.mrftyres.com/"
                                        className="partners__link"
                                        aria-label="https://www.mrftyres.com/"

                                        title="https://www.mrftyres.com/"
                                    >
                                        <picture className="rankings__promo-picture picture ">
                                            <source className="rankings__promo-image" srcset="https://resources.pulse.icc-cricket.com/photo-resources/2022/07/11/0906796e-088a-4c9f-816f-52fa87813bb7/MRF-Rankings-logo.png?width=100&height=33, https://resources.pulse.icc-cricket.com/photo-resources/2022/07/11/0906796e-088a-4c9f-816f-52fa87813bb7/MRF-Rankings-logo.png?width=200&height=66 2x" media="(max-width: 840px)" />
                                            <img className="rankings__promo-image  picture__img" src="../resources.pulse.icc-cricket.com/photo-resources/2022/07/11/0906796e-088a-4c9f-816f-52fa87813bb7/MRF-Rankings-logo87e8.png?width=150&amp;height=50" alt="MRF Rankings logo" />
                                        </picture>
                                    </a>
                                </div>

                                <header className="widget-header rankings__widget-header">
                                    <h2 className="widget-header__title rankings__widget-header-title">ICC Rankings</h2>
                                </header>
                                <a href="rankings/mens/overview.html" className="btn rankings__widget-header-button-mobile u-show-tablet" title="View All Rankings">View All</a>
                            </div>

                            <a href="rankings/mens/overview.html" className="btn rankings__widget-header-button u-hide-tablet" title="View All Rankings">View All Rankings</a>

                            <button className="rankings__tab-button is-active js-player-rankings" title="Show Player Stats">
                                Player rankings
                            </button>
                            <button className="rankings__tab-button  js-team-rankings" title="Show Team Stats">
                                Team rankings
                            </button>
                        </div>

                        <div className="rankings__content js-player-rankings-panel ">
                            <div className="rankings__players">
                                <div className="rankings__filters">
                                    <div className="rankings__filters-gender">
                                        <button className="rankings__panel-button js-stats-players-men is-active" title="Show Mens Stats">Mens</button>
                                        <button className="rankings__panel-button js-stats-players-women" title="Show Womens Stats">Womens</button>
                                    </div>
                                    <div className="rankings__filters-type">
                                        <button title="Show Test Stats" className="rankings__panel-button js-type-test  ">Test</button>
                                        <button title="Show ODI Stats" className="rankings__panel-button js-type-odi ">ODI</button>
                                        <button title="Show T20I Stats" className="rankings__panel-button js-type-t20i is-active">T20I</button>
                                    </div>
                                </div>

                                <div className="rankings__content js-stats-players-panel-men">
                                    <div className="rankings__content-panel js-panel-test-men u-visually-hidden">
                                        <div className="content-slider">
                                            <div className="content-slider__wrapper js-scroll-list">
                                                <ul className="js-content-slider-content content-slider__inner-wrapper">

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-test">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/887.png" alt="Joe Root" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            test
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BATTING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Joe</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Root
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 ENG no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Joe</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Root
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">887</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Marnus</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Labuschagne
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">885</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 PAK"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Babar</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Azam
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">879</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Steve</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Smith
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">848</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Rishabh</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Pant
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">801</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/mens/player-rankings/test/batting.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-test">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/488.png" alt="Pat Cummins" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            test
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BOWLING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Pat</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Cummins
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 AUS no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Pat</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Cummins
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">891</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Ravichandran</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Ashwin
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">842</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 PAK"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Shaheen</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Afridi
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">828</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Jasprit</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Bumrah
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">828</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">James</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Anderson
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">825</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/mens/player-rankings/test/bowling.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-test">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/9.png" alt="Ravindra Jadeja" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            test
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            All-Rounder
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Ravindra</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Jadeja
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 IND no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Ravindra</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Jadeja
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">384</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Ben</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Stokes
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">362</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Ravichandran</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Ashwin
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">335</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 BAN"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Shakib</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Al
                                                                                Hasan
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">328</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 WI"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Jason</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Holder
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">323</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/mens/player-rankings/test/all-rounder.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rankings__content-panel js-panel-odi-men u-visually-hidden">
                                        <div className="content-slider">
                                            <div className="content-slider__wrapper js-scroll-list">
                                                <ul className="js-content-slider-content content-slider__inner-wrapper">

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/2759.png" alt="Babar Azam" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            odi
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BATTING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Babar</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Azam
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 PAK no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 PAK"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Babar</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Azam
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">890</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 SA"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Rassie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                van
                                                                                der
                                                                                Dussen
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">789</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 SA"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Quinton</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                de
                                                                                Kock
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">784</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 PAK"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Imam-ul-Haq</span>
                                                                            <span className="rankings-card__player-surname">

                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">779</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Virat</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Kohli
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">744</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/mens/player-rankings/odi/batting.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/969.png" alt="Trent Boult" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            odi
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BOWLING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Trent</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Boult
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 NZ no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 NZ"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Trent</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Boult
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">775</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Josh</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Hazlewood
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">718</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AFG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Mujeeb</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Ur
                                                                                Rahman
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">676</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Jasprit</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Bumrah
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">662</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 PAK"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Shaheen</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Afridi
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">661</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/mens/player-rankings/odi/bowling.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/201.png" alt="Shakib Al Hasan" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            odi
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            All-Rounder
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Shakib</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Al
                                                                                Hasan
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 BAN no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 BAN"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Shakib</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Al
                                                                                Hasan
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">372</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AFG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Mohammad</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Nabi
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">325</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AFG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Rashid</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Khan
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">290</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 NZ"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Mitchell</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Santner
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">275</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ZIM"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Sikandar</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Raza
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">261</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/mens/player-rankings/odi/all-rounder.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rankings__content-panel js-panel-t20i-men ">
                                        <div className="content-slider">
                                            <div className="content-slider__wrapper js-scroll-list">
                                                <ul className="js-content-slider-content content-slider__inner-wrapper">

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/1201.png" alt="Mohammad Rizwan" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            t20i
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BATTING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Mohammad</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Rizwan
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 PAK no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <div className="rankings-card__player-movement rankings-card__player-movement--up">
                                                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M9 6L5 2L1 6" stroke="#24D657" stroke-width="2" />
                                                                                </svg>
                                                                                <span className="rankings-card__player-pos-difference">1</span>
                                                                            </div>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 PAK"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Mohammad</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Rizwan
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">854</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <div className="rankings-card__player-movement rankings-card__player-movement--down">
                                                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M1 1L5 5L9 1" stroke="#E22331" stroke-width="2" />
                                                                                </svg>
                                                                                <span className="rankings-card__player-pos-difference">1</span>
                                                                            </div>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Suryakumar</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Yadav
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">838</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 PAK"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Babar</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Azam
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">801</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 SA"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Aiden</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Markram
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">777</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Dawid</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Malan
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">733</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/mens/player-rankings/t20i/batting.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/857.png" alt="Josh Hazlewood" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            t20i
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BOWLING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Josh</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Hazlewood
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 AUS no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Josh</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Hazlewood
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">737</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AFG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Rashid</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Khan
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">696</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <div className="rankings-card__player-movement rankings-card__player-movement--up">
                                                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M9 6L5 2L1 6" stroke="#24D657" stroke-width="2" />
                                                                                </svg>
                                                                                <span className="rankings-card__player-pos-difference">1</span>
                                                                            </div>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 SL"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Wanindu</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Hasaranga
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">692</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <div className="rankings-card__player-movement rankings-card__player-movement--up">
                                                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M9 6L5 2L1 6" stroke="#24D657" stroke-width="2" />
                                                                                </svg>
                                                                                <span className="rankings-card__player-pos-difference">1</span>
                                                                            </div>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Adam</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Zampa
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">691</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <div className="rankings-card__player-movement rankings-card__player-movement--down">
                                                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M1 1L5 5L9 1" stroke="#E22331" stroke-width="2" />
                                                                                </svg>
                                                                                <span className="rankings-card__player-pos-difference">2</span>
                                                                            </div>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 SA"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Tabraiz</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Shamsi
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">688</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/mens/player-rankings/t20i/bowling.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/618.png" alt="Mohammad Nabi" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            t20i
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            All-Rounder
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Mohammad</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Nabi
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 AFG no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AFG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Mohammad</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Nabi
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">246</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 BAN"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Shakib</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Al
                                                                                Hasan
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">238</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Moeen</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Ali
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">202</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 SL"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Wanindu</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Hasaranga
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">184</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Hardik</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Pandya
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">173</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/mens/player-rankings/t20i/all-rounder.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rankings__content js-stats-players-panel-women u-visually-hidden">
                                    <div className="rankings__content-panel js-panel-odi-women">
                                        <div className="content-slider">
                                            <div className="content-slider__wrapper js-scroll-list">
                                                <ul className="js-content-slider-content js-slider-women-odi content-slider__inner-wrapper">

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/466.png" alt="Alyssa Healy" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            odi
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BATTING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Alyssa</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Healy
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 AUS no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Alyssa</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Healy
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">785</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Beth</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Mooney
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">749</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 SA"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Laura</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Wolvaardt
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">732</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Natalie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Sciver
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">725</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Harmanpreet</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Kaur
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">716</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/womens/player-rankings/odi/batting.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/3337.png" alt="Sophie Ecclestone" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            odi
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BOWLING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Sophie</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Ecclestone
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 ENG no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Sophie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Ecclestone
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">739</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Jess</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Jonassen
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">725</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Megan</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Schutt
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">722</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 SA"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Shabnim</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Ismail
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">722</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Jhulan</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Goswami
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">698</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/womens/player-rankings/odi/bowling.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/3126.png" alt="Hayley Matthews" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            odi
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            All-Rounder
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Hayley</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Matthews
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 WI no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <div className="rankings-card__player-movement rankings-card__player-movement--up">
                                                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M9 6L5 2L1 6" stroke="#24D657" stroke-width="2" />
                                                                                </svg>
                                                                                <span className="rankings-card__player-pos-difference">4</span>
                                                                            </div>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 WI"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Hayley</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Matthews
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">380</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <div className="rankings-card__player-movement rankings-card__player-movement--down">
                                                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M1 1L5 5L9 1" stroke="#E22331" stroke-width="2" />
                                                                                </svg>
                                                                                <span className="rankings-card__player-pos-difference">1</span>
                                                                            </div>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Ellyse</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Perry
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">374</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <div className="rankings-card__player-movement rankings-card__player-movement--down">
                                                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M1 1L5 5L9 1" stroke="#E22331" stroke-width="2" />
                                                                                </svg>
                                                                                <span className="rankings-card__player-pos-difference">1</span>
                                                                            </div>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Natalie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Sciver
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">357</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <div className="rankings-card__player-movement rankings-card__player-movement--down">
                                                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M1 1L5 5L9 1" stroke="#E22331" stroke-width="2" />
                                                                                </svg>
                                                                                <span className="rankings-card__player-pos-difference">1</span>
                                                                            </div>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 NZ"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Amelia</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Kerr
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">356</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <div className="rankings-card__player-movement rankings-card__player-movement--down">
                                                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M1 1L5 5L9 1" stroke="#E22331" stroke-width="2" />
                                                                                </svg>
                                                                                <span className="rankings-card__player-pos-difference">1</span>
                                                                            </div>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 SA"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Marizanne</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Kapp
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">349</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/womens/player-rankings/odi/all-rounder.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rankings__content-panel js-panel-t20i-women u-visually-hidden">
                                        <div className="content-slider">
                                            <div className="content-slider__wrapper js-scroll-list">
                                                <ul className="js-content-slider-content content-slider__inner-wrapper">

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/1817.png" alt="Beth Mooney" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            t20i
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BATTING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Beth</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Mooney
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 AUS no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Beth</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Mooney
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">743</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Meg</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Lanning
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">725</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Smriti</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Mandhana
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">717</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Tahlia</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                McGrath
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">704</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 NZ"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Sophie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Devine
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">699</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/womens/player-rankings/t20i/batting.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/3337.png" alt="Sophie Ecclestone" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            t20i
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BOWLING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Sophie</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Ecclestone
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 ENG no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Sophie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Ecclestone
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">756</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Sarah</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Glenn
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">737</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 WI"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Hayley</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Matthews
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">707</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 SA"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Shabnim</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Ismail
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">707</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">

                                                                            <div className="rankings-card__player-movement rankings-card__player-movement--up">
                                                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M9 6L5 2L1 6" stroke="#24D657" stroke-width="2" />
                                                                                </svg>
                                                                            </div>

                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Megan</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Schutt
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">704</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/womens/player-rankings/t20i/bowling.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image" src="../resources.pulse.icc-cricket.com/players/130x150/478.png" alt="Sophie Devine" />

                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            t20i
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            All-Rounder
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span className="rankings-card__top-player-first-name">Sophie</span>
                                                                            <span className="rankings-card__top-player-surname">

                                                                                Devine
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 NZ no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 NZ"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Sophie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Devine
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">390</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 WI"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Hayley</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Matthews
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">359</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Ashleigh</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Gardner
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">353</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Deepti</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Sharma
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">344</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4" r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span className="rankings-card__player-first-name">Natalie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Sciver
                                                                            </span>
                                                                        </td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">328</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/womens/player-rankings/t20i/all-rounder.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rankings__content js-team-rankings-panel u-visually-hidden">
                            <div className="rankings__teams">
                                <div className="rankings__filters">
                                    <div className="rankings__filters-gender">
                                        <button className="rankings__panel-button js-stats-team-men is-active" title="Show Mens Stats">Mens</button>
                                        <button className="rankings__panel-button js-stats-team-women" title="Show Womens Stats">Womens</button>
                                    </div>
                                </div>

                                <div className="rankings__content js-stats-team-panel-men">
                                    <div className="rankings__content-panel">
                                        <div className="content-slider">
                                            <div className="content-slider__wrapper js-scroll-list">
                                                <ul className="js-content-slider-content content-slider__inner-wrapper">


                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-test">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header-team">
                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            test
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="rankings-card__top-teams">
                                                                    <div className="rankings-card__top-team rankings-card__top-team--first">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                1
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 AUS no-border"></span>
                                                                            <span className="rankings-card__top-team-name">AUS</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                2
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 IND no-border"></span>
                                                                            <span className="rankings-card__top-team-name">IND</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                3
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 SA no-border"></span>
                                                                            <span className="rankings-card__top-team-name">SA</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">Australia</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">128</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">India</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">114</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 SA"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">South Africa</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">104</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">England</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">103</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 NZ"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">New Zealand</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">100</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/mens/team-rankings/test.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header-team">
                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            odi
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="rankings-card__top-teams">
                                                                    <div className="rankings-card__top-team rankings-card__top-team--first">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                1
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 ENG no-border"></span>
                                                                            <span className="rankings-card__top-team-name">ENG</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                2
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 NZ no-border"></span>
                                                                            <span className="rankings-card__top-team-name">NZ</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                3
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 IND no-border"></span>
                                                                            <span className="rankings-card__top-team-name">IND</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">England</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">119</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 NZ"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">New Zealand</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">114</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">India</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">111</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 PAK"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">Pakistan</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">107</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">Australia</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">106</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/mens/team-rankings/odi.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header-team">
                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            t20i
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="rankings-card__top-teams">
                                                                    <div className="rankings-card__top-team rankings-card__top-team--first">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                1
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 IND no-border"></span>
                                                                            <span className="rankings-card__top-team-name">IND</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                2
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 ENG no-border"></span>
                                                                            <span className="rankings-card__top-team-name">ENG</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                3
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 SA no-border"></span>
                                                                            <span className="rankings-card__top-team-name">SA</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">India</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">268</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">England</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">262</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 SA"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">South Africa</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">258</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 PAK"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">Pakistan</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">257</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 NZ"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">New Zealand</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">252</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/mens/team-rankings/t20i.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rankings__content js-stats-team-panel-women u-visually-hidden">
                                    <div className="rankings__content-panel">
                                        <div className="content-slider">
                                            <div className="content-slider__wrapper js-scroll-list">
                                                <ul className="js-content-slider-content content-slider__inner-wrapper">


                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header-team">
                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            odi
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="rankings-card__top-teams">
                                                                    <div className="rankings-card__top-team rankings-card__top-team--first">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                1
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 AUS no-border"></span>
                                                                            <span className="rankings-card__top-team-name">AUS</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                2
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 SA no-border"></span>
                                                                            <span className="rankings-card__top-team-name">SA</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                3
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 ENG no-border"></span>
                                                                            <span className="rankings-card__top-team-name">ENG</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">Australia</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">170</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 SA"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">South Africa</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">119</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">England</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">116</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">India</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">104</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 NZ"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">New Zealand</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">101</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/womens/team-rankings/odi.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header-team">
                                                                    <div className="rankings-card__type-info">
                                                                        <div className="rankings-card__type">
                                                                            t20i
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="rankings-card__top-teams">
                                                                    <div className="rankings-card__top-team rankings-card__top-team--first">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                1
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 AUS no-border"></span>
                                                                            <span className="rankings-card__top-team-name">AUS</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                2
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 ENG no-border"></span>
                                                                            <span className="rankings-card__top-team-name">ENG</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div className="rankings-card__top-team-header-position">
                                                                                3
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 NZ no-border"></span>
                                                                            <span className="rankings-card__top-team-name">NZ</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">1</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 AUS"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">Australia</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">299</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">2</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 ENG"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">England</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">281</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">3</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 NZ"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">New Zealand</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">272</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">4</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 IND"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">India</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">267</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--index">5</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--position"></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--flag"><span className="flag-20 SA"></span></td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--name">South Africa</td>
                                                                        <td className="rankings-card__table-cell rankings-card__table-cell--rating">246</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="rankings/womens/team-rankings/t20i.html" className="widget-header-link  " title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Raking