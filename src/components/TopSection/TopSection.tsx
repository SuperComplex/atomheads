import React, { useState, useEffect} from 'react';
// import Slider from 'react-slick';
import GifPlayer from 'react-gif-player';
import * as Scroll from 'react-scroll';
import { Link, animateScroll } from "react-scroll";
import './TopSection.scss';


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
      // start scroll in moment when touch to button
      setTimeout(()=>{
        // clickAnimeElement();//for stop anime
        Scroll.scroller.scrollTo('mint', {
          spy: true,
          smooth: true,
          offset: 0,
          delay: 0,//!!
          duration: 1000,
        });
      },1900)
      // stop animation when finish full cicle of animation
      setTimeout(()=>{
        clickAnimeElement();//for stop anime
      },2500)
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
          <div className={`img2-container${playing?' click-off':''}`}>
            {/* <img className="img2" src="/img/pressicon.gif" alt="logo" /> */}
            <GifPlayer
              className="img2"
              gif="/img/pressicon.gif"
              // still="/img/pressicon_frame_0.gif"
              onTogglePlay={ (playing: boolean) => setPlaying(playing) }
              // pauseRef={ (pause: any) => setPauseGif(pause) }
              // ref={myAnime}
            />
          </div>
          <div className="img3-container">
            <img className={`img3${playing?' click-off':''}`} src="/img/pressfofree.svg" alt="logo" onClick={clickAnimeElement}/>
          </div>
        </div>
        
        <div className="bottom-bg">
        </div>
      </div>
    </section>
  );
}

export default TopSection;
