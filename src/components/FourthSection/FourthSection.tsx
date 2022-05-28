import './FourthSection.scss';

function FourthSection() {
  return (
    <section className="fourth-section">
      <div className="fourth-section-container wrapper">
        
        <div className="info-img-container">
          <img className="info-img" src="/img/forall.svg" alt="forAll" />
        </div>
        
        
        <p className="t1">
          Claim your first 100% common AtomHead for free or mint extra (with a chance for rarer AtomHeads) for XXXETH & be a part of something that matters
        </p>
        
        {/* <div className="bottom-element1">  you can use div here*/}
        <a href="http://atomheads.opshyk.click/" className="bottom-element1">
          <div className="aspratio-box">
            <div className="ratio-container">
              <div className="img-container">
                <img className="element-img" src="/img/space.svg" alt="space" />
              </div>
              {/* <div a href="#" className="el-footer">  you can use <a> here*/}
              <div className="el-footer">
                Claim Atomhead
              </div>
              <div className="left-badge left-badge1">
                free
              </div>
              <div className="right-badge-list">
                <div className="right-badge c-green crazy-shadow">
                  100% Common 
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="http://atomheads.opshyk.click/" className="bottom-element2">
          <div className="aspratio-box">
            <div className="ratio-container">
              <div className="img-container">
                <img className="element-img" src="/img/space.svg" alt="space" />
              </div>
              <div className="el-footer">
                Mint Atomhead
              </div>
              <div className="left-badge left-badge2">
                <span>0.001</span>
                <span>ETH</span>
              </div>
              <div className="right-badge-list">
                <div className="right-badge c-green crazy-shadow">
                  70% Common 
                </div>
                <div className="right-badge c-purple crazy-shadow">
                  20% Rare
                </div>
                <div className="right-badge c-red crazy-shadow">
                  10% Legendary 
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default FourthSection;
