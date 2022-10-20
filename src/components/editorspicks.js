import {Link} from 'react-router-dom'

const GalleryCard = () => {
    return (
        <>
            <article className="media-thumbnail-horizontal  media-thumbnail-horizontal--mobile-compact " data-widget="lazy-load-images">
                <Link className="media-thumbnail-horizontal__link" to="#):" title="Where to watch the T20 World Cup 2022? TV Broadcast partners and live streaming">
                    <div className="media-thumbnail-horizontal__container">
                        <div className="media-thumbnail-horizontal__meta">
                            <span className="media-thumbnail-horizontal__tag theme theme-t20wc">T20 World Cup</span>
                            <h1 className="media-thumbnail-horizontal__heading">Where to watch the T20 World Cup 2022? TV Broadcast partners and live streaming</h1>
                            <time className="media-thumbnail-horizontal__date">06 Oct 22</time>
                        </div>
                        <header className="media-thumbnail-horizontal__image-container">
                            <div className="lazy-image">
                                <div className="js-lazy-load u-observed lazy-image-wrapper">
                                    <picture className="object-fit-cover-picture ">
                                        <img className="js-faded-image fade-in-on-load object-fit-cover-picture__img" src="https://resources.pulse.icc-cricket.com/photo-resources/2022/10/07/e24fc1ca-bddc-4408-bfee-f9f7a0daf371/WCTrophy.png?width=114&height=114" alt="WCTrophy" />
                                    </picture>
                                </div>
                            </div>
                        </header>
                    </div>
                </Link>
            </article>
        </>
    )
}


const Editorpicks = () => {
    return (
        <>

            <section className="content-listing theme-highlight widget" >
                <div className="constraint-wrapper">
                    <header className="widget-header ">
                        <h2 className="widget-header__title ">Gallery</h2>
                        <a href="news.html" className="widget-header-link  u-hide-tablet" title="More <span className=''>Top Stories</span>">
                            More <span className=''>Galleries</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                            </svg>

                        </a>
                    </header>

                    <div className="content-listing__container">
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    </div>

                    <footer className="widget-footer u-show-tablet">
                        <a href="news.html" className="widget-header-link  " title="More <span className=''>Top Stories</span>">
                            More <span className=''>Top Stories</span> 	<svg className="icon widget-header-link__icon" aria-hidden="true">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="resources/icc-prod/v1.1.2/i/svg-output/icons.svg#icn-chevron-right"></use>
                            </svg>

                        </a>
                    </footer>
                </div>
            </section>
        </>
    )
}
export default Editorpicks