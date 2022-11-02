import { useEffect } from "react";
import { Link } from "react-router-dom";
const SliderVideo = () => {
  useEffect(() => {
    document.querySelectorAll("video")[0].play();
  }, []);
  return (
    <>
      <section className="video-hero video-hero--top ">
        <Link className="video-hero__banner">
          <div
            className="inline-player video-hero__video-container"
            data-script="icc_video"
            data-widget="video-player"
          >
            <div
              playsInline={true}
              loop={true}
              muted={true}
              className="video-js vjs-controls-disabled vjs-workinghover vjs-v7 bc-player-default_default bc-player-default_default-index-0 vjs-mouse vjs-plugins-ready vjs-player-info vjs-contextmenu vjs-contextmenu-ui vjs-errors vjs-playing vjs-has-started vjs-layout-medium vjs-user-inactive"
              data-application-id=""
              data-embed="default"
              data-player="default"
              data-account="3910869736001"
              data-video-id="6302950251001"
              id="iccVideoPlayer2563965"
              tabIndex="-1"
              role="region"
              lang="en"
              translate="no"
              aria-label="Video Player"
            >
              <video
                id="iccVideoPlayer2563965_html5_api"
                data-video-id="6302950251001"
                data-account="3910869736001"
                data-player="default"
                data-embed="default"
                data-application-id=""
                className="vjs-tech"
                muted="muted"
                loop={true}
                playsInline={true}
                tabIndex="-1"
                role="application"
                src="https://cricshizz.com.pk/videos/slider.mp4"
              ></video>
              <script src="https://vjs.zencdn.net/vttjs/0.15.3/vtt.global.min.js"></script>
              <div
                className="vjs-text-track-display"
                translate="yes"
                aria-live="off"
                aria-atomic="true"
              >
                <div
                  style={{ position: "absolute", inset: "0px", margin: "1.5%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="video-hero__overlay"></div>
          <div className="video-hero__overlay-bottom-gradient"></div>
          <div className="video-hero__text">
            <div className="wrapper">
              <div className="col-12">
                <p
                  className="video-hero__tag video-hero__tag--womens-world-cup"
                  title="Women's Cricket World Cup"
                >
                  #ItHasBegun
                </p>
                <h1 className="video-hero__title">
                  For Every Match There Is A Moment To Capture
                </h1>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
};
export default SliderVideo;
