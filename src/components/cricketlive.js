const CLive = () => {
    return (
        <>
            <section className="configurable-promo"
                style={{ '--promo-bg-color': '#123270', '--promo-text-color': '#FFFFFF' }}
                data-widget="lazy-load-images">

                <div className="configurable-promo__container">
                    <a href="https://bit.ly/3QmWz3y" className="configurable-promo__overlay-link" ></a>

                    <div className="configurable-promo__text-container">
                        <div className="configurable-promo__logo-container">
                            <div className="lazy-image">
                                <div className="js-lazy-load u-observed lazy-image-wrapper">
                                    <picture className="configurable-promo__logo picture ">
                                        <source className="" srcset="https://resources.pulse.icc-cricket.com/photo-resources/2022/06/30/502f2811-dbb3-4b2d-a27e-ad5bdc9d5e2f/icc.tv_logo_white.png?width=59.25, https://resources.pulse.icc-cricket.com/photo-resources/2022/06/30/502f2811-dbb3-4b2d-a27e-ad5bdc9d5e2f/icc.tv_logo_white.png?width=118.5 2x" media="(max-width: 640px)" />
                                            <img className=" js-faded-image fade-in-on-load picture__img" src="https://resources.pulse.icc-cricket.com/photo-resources/2022/06/30/502f2811-dbb3-4b2d-a27e-ad5bdc9d5e2f/icc.tv_logo_white.png?width=79" alt="icc.tv_logo_white" />
                                            </picture>
                                        </div>
                                </div>
                            </div>
                            <h3 className="configurable-promo__title">ICC.tv - Watch Cricket Live or On-Demand</h3>
                            <span className="configurable-promo__summary"></span>
                            <div className="configurable-promo__cta-container">
                                <a href="https://bit.ly/3QmWz3y" className="configurable-promo__cta ">
                                    Watch Now
                                </a>
                            </div>
                        </div>
                        <div className="configurable-promo__img-container">
                            <div className="lazy-image">
                                <div className="js-lazy-load u-observed lazy-image-wrapper">
                                    <picture className=" object-fit-cover-picture ">
                                        <source className="" srcset="https://resources.pulse.icc-cricket.com/photo-resources/2022/07/01/d3c7dcd0-9b3d-441e-a66e-ec37baddbe5a/GettyImages-1348518130-1-.png?width=660&height=469, https://resources.pulse.icc-cricket.com/photo-resources/2022/07/01/d3c7dcd0-9b3d-441e-a66e-ec37baddbe5a/GettyImages-1348518130-1-.png?width=1320&height=938 2x" media="(max-width: 840px)" />
                                            <img className="configurable-promo__image js-faded-image fade-in-on-load object-fit-cover-picture__img" src="https://resources.pulse.icc-cricket.com/photo-resources/2022/07/01/d3c7dcd0-9b3d-441e-a66e-ec37baddbe5a/GettyImages-1348518130-1-.png?width=860&height=420" alt="GettyImages-1348518130 (1)" />
                                            </picture>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </>
                )
}
                export default CLive