import './SixthSection.scss';

function SixthSection() {
  return (
    <section className="sixth-section" id="traits">
      <div className="sixth-section-container wrapper">
        <div className="info-container">
          <div className="infoimg-container">
            <img className="infoimg" src="/img/traits.svg" alt="traits" />
          </div>
          <div className="text">
            <p>
              Web3 Law of Matter states:
              “ no atoms can be made or lost 
              in a reaction, only rearranged”
            </p>
            <p>
              450 Traits, all randomnly arranged and stored forever on the blockchain.
            </p>
          </div>
        </div>

        <div className="rightimg-container">
          <img className="rightimg" src="/img/looney.gif" alt="looney" />
        </div>
        
      </div>
    </section>
  );
}

export default SixthSection;
