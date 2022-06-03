import React, { useState, useEffect} from 'react';
import Slider from 'react-slick';
import GifPlayer from 'react-gif-player';
import * as Scroll from 'react-scroll';
import { Link, animateScroll } from "react-scroll";
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
  // const myAnime = useRef<HTMLElement>(null);
  const[playing, setPlaying] = useState(false);
  // const[pauseGif, setPauseGif] = useState(true);
  const clickAnimeElement = () => {
    // myAnime.current?.click()
    let playButton:HTMLElement = document.querySelector('.play_button') as HTMLElement;
   
    playButton.click();
  }
  useEffect(() => {
    if(playing) {
      setTimeout(()=>{
        clickAnimeElement();
        Scroll.scroller.scrollTo('mint', {
          spy: true,
          smooth: true,
          offset: 0,
          delay: 0,//!!
          duration: 1500,
        })}
        ,2500)
    }
  },[playing]);
  return (
    <section className="top-section" id="top">
      <div className="top-section-container wrapper">
        <div className="left-container">
          <div className="img1-container">
            <img className="img1" src="/img/logo-2.svg" alt="logo" />
          </div>
          <p className="top-text">The <span className="accent">FREE,</span> infinitely Inclusive & Carbon Neutral NFT</p>
        </div>
        <div className="right-container">
          <div className="img2-container">
            {/* <Link
              to="mint"
              spy={true}
              smooth={true}
              offset={0}
              delay={2500}
              duration={1500}
            > */}
              {/* <img className="img2" src="/img/pressicon.gif" alt="logo" /> */}
              <GifPlayer
                className="img2"
                gif="/img/pressicon.gif"
                // still="/img/pressicon_frame_0.gif"
                onTogglePlay={ (playing: boolean) => setPlaying(playing) }
                // pauseRef={ (pause: any) => setPauseGif(pause) }
                // ref={myAnime}
              />
            {/* </Link> */}
          </div>
          <div className="img3-container">
            <Link
              to="mint"
              spy={true}
              smooth={true}
              offset={0}
              delay={2500}
              duration={1500}
              onClick={clickAnimeElement}
            >
              <img className="img3" src="/img/pressfofree.svg" alt="logo" />
            </Link>
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
function button(button: any): any {
  throw new Error('Function not implemented.');
}

function div(div: any): any {
  throw new Error('Function not implemented.');
}

