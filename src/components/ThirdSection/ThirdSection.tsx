import './ThirdSection.scss';

function ThirdSection() {
  return (
    <section className="third-section">
      <div className="third-section-container wrapper">
        <div className="left-container">
          <div className="img1-container">
            <img className='img1' src="/img/Building.svg" alt="Building"/>
          </div>
        </div> 
        <div className="right-container">
          <div className="img2-container">
            <img className='img2' src="/img/bonding-building.svg" alt="bonding-building"/> 
          </div>
          <div className="text">
            <p>
              In Web3, AtomHeads were made to bond & build community amongst all member. 
            </p>
            <p>
              The infinitely free CC0 NFT Avatar grows the Web3 Community the way it was made to be originally - For everyone, by everyone.
            </p>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default ThirdSection;