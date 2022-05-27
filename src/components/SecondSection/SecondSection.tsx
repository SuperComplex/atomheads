import './SecondSection.scss';

function SecondSection() {
  return (
    <section className="second-section">
      <div className="second-section-container wrapper">
        <div className="left-container">
          <div className="img1-container">
            <img className="img1" src="/img/second-section.png" alt="second" />
          </div>
        </div>
        <div className="right-container">
          <p className="t1">
            All matter is made of atoms & likewise, all atoms are made to matter.
          </p>
          <p className="t2">
            -Bill Nye, the atom guy
          </p>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
