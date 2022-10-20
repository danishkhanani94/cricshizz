import { Link } from 'react-router-dom'

const Join = () => {
    return (
        <>
            <section className="configurable-promo"
                style={{ '--promo-bg-color': '#006BFF', '--promo-text-color': '#FFFFFF', }}
                data-widget="lazy-load-images">

                <div className="configurable-promo__container">
                    <Link to="#):" className="configurable-promo__overlay-link" ></Link>

                    <div className="configurable-promo__text-container">
                        <div className="configurable-promo__logo-container">
                            <div>
                                <div className="js-lazy-load u-observed lazy-image-wrapper">
                                    <picture className="configurable-promo__logo picture ">
                                        <source className="" srcSet="https://resources.pulse.icc-cricket.com/photo-resources/2022/07/12/eeb900a9-148e-4d15-8e49-e8dd00563005/ICC_Logo_L_RGB_Neg.png?width=135, https://resources.pulse.icc-cricket.com/photo-resources/2022/07/12/eeb900a9-148e-4d15-8e49-e8dd00563005/ICC_Logo_L_RGB_Neg.png?width=270 2x" media="(max-width: 640px)" />
                                        <img className=" js-faded-image fade-in-on-load picture__img" src="https://resources.pulse.icc-cricket.com/photo-resources/2022/07/12/eeb900a9-148e-4d15-8e49-e8dd00563005/ICC_Logo_L_RGB_Neg.png?width=180" alt="ICC_Logo_L_RGB_Neg" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <h3 className="configurable-promo__title">Join the ICC Family</h3>
                        <span className="configurable-promo__summary">Exclusive content, priority ticket access and personalised news sent straight to your email. Never miss a moment!</span>
                        <div className="configurable-promo__cta-container">
                            <Link to="#):" className="configurable-promo__cta ">
                                Create an account for free
                            </Link>
                        </div>
                    </div>
                    <div className="configurable-promo__img-container">
                        <div className="lazy-image is-loaded">
                            <div className="js-lazy-load u-observed lazy-image-wrapper">
                                <picture className="object-fit-cover-picture ">
                                    <source className="" srcSet="https://resources.pulse.icc-cricket.com/photo-resources/2022/07/12/706a181e-ab14-4ecb-98ac-25a67ac598bb/promo-image-1.png?width=660&height=469, https://resources.pulse.icc-cricket.com/photo-resources/2022/07/12/706a181e-ab14-4ecb-98ac-25a67ac598bb/promo-image-1.png?width=1320&height=938 2x" media="(max-width: 840px)" />
                                    <img className="configurable-promo__image js-faded-image fade-in-on-load object-fit-cover-picture__img" src="https://resources.pulse.icc-cricket.com/photo-resources/2022/07/12/706a181e-ab14-4ecb-98ac-25a67ac598bb/promo-image-1.png?width=860&height=420" alt="promo image 1" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Join