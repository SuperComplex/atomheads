
import './TopSection.scss';

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
            <img className="img2" src="/img/pressicon.svg" alt="logo" />
          </div>
          <div className="img3-container">
            <img className="img3" src="/img/pressfofree.svg" alt="logo" />
          </div>
        </div>
        <div className="bottom-bg"></div>
      </div>
    </section>
  );
}

export default TopSection;
