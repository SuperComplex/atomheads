import './SeventhSection.scss';

function SeventhSection() {
  return (
    <section className="seventh-section">
      <div className="seventh-section-container wrapper">
        <div className="top-container">
          <div className="topimg1-container">
            <img className="img" src="/img/walking.png" alt="walking" />
          </div>
          <div className="topimg2-container">
            <img className="img" src="/img/details.svg" alt="details" />
          </div>
        </div>

        <div className="table-container">
          <div className="table-el">
            <span className="t1">SUPPLY</span>
            <span className="t2">Unlimited</span>
          </div>
          <div className="table-el">
            <span className="t1">ROYALTY</span>
            <span className="t2">10%</span>
          </div>
          <div className="table-el">
            <span className="t1">MINT PRICE</span>
            <span className="t2">FREE, 0.01 ETH</span>
          </div>
          <div className="table-el">
            <span className="t1">TRAITS</span>
            <span className="t2">450+</span>
          </div>
          <div className="table-el">
            <span className="t1">STANDARD</span>
            <span className="t2">ERC721A</span>
          </div>
          <div className="table-el">
            <span className="t1">CONTRACT</span>
            <span className="t2">CCO</span>
          </div>
          <div className="table-el">
            <span className="t1">BLOCKCHAIN</span>
            <span className="t2">IMX</span>
          </div>
          <div className="table-el">
            <span className="t1">License</span>
            <span className="t2">CCO</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default SeventhSection;
