import Slider from 'react-slick'
import './TopSection.scss';

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  variableWidth: true,
  speed: 7000,
  autoplaySpeed: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: "linear",
  pauseOnHover: false,
  draggable: false,
  arrows: false,
};
function TopSection() {
  return (
    <section className="top-section">
      <div className="top-section-container wrapper">
        <div className="left-container">
          <div className="img1-container">
            <img className="img1" src="/img/logo-2.svg" alt="logo" />
          </div>
          <p className="top-text">The <span className="accent">FREE,</span> infinitely Inclusive & Carbon Neutral NFT</p>
        </div>
        <div className="right-container">
          <div className="img2-container">
            <img className="img2" src="/img/pressicon.gif" alt="logo" />
          </div>
          <div className="img3-container">
            <img className="img3" src="/img/pressfofree.svg" alt="logo" />
          </div>
        </div>
        
        <div className="bottom-bg">
          <Slider {...settings}>
            <div>
              <div className="slide">
                <img className="img" src="/img/ax-1.png" alt="slide1" />
              </div>
            </div>
            <div>
              <div className="slide">
                <img className="img" src="/img/ax-2.png" alt="slide2" />
              </div>
            </div>
            <div>
              <div className="slide">
                <img className="img" src="/img/ax-3.png" alt="slide3" />
              </div>
            </div>
            <div>
              <div className="slide">
                <img className="img" src="/img/ax-4.png" alt="slide4" />
              </div>
            </div>
            <div>
              <div className="slide">
                <img className="img" src="/img/ax-5.png" alt="slide5" />
              </div>
            </div>
            <div>
              <div className="slide">
                <img className="img" src="/img/ax-6.png" alt="slide6" />
              </div>
            </div>
            <div>
              <div className="slide">
                <img className="img" src="/img/ax-1.png" alt="slide7" />
              </div>
            </div>
            <div>
              <div className="slide">
                <img className="img" src="/img/ax-2.png" alt="slide8" />
              </div>
            </div>
            <div>
              <div className="slide">
                <img className="img" src="/img/ax-3.png" alt="slide9" />
              </div>
            </div>
            <div>
              <div className="slide">
                <img className="img" src="/img/ax-4.png" alt="slide10" />
              </div>
            </div>
            <div>
              <div className="slide">
                <img className="img" src="/img/ax-5.png" alt="slide11" />
              </div>
            </div>
            <div>
              <div className="slide">
                <img className="img" src="/img/ax-6.png" alt="slide12" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default TopSection;
