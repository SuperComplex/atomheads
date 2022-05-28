import './FifthSection.scss';

function FifthSection() {
  return (
    <section className="fifth-section">
      <div className="fifth-section-container wrapper">
        
        <div className="anime1-container">
          <img className="anime-img" src="/img/anime-left.svg" alt="anime-left" />
        </div>

        <div className="info-container">
          <p className="t1">Atoms can be created...</p>
          <p className="t2">but not destroyed*</p>
          <p className="t3">**Atomheads live immutably on the blockchain</p>
          <div className="logos-container">
            <div className='logo1-container'>
              <img className="logo-img" src="/img/poweredby.svg" alt="PoweredBy"/>
            </div>
            <div className='logo2-container'> 
              <img className="logo-img" src="/img/immutable.svg" alt="immutable"/>
            </div>
          </div>
        </div>
        
        <div className="anime2-container">
          <img className="anime-img" src="/img/anime-right.svg" alt="anime-left" />
        </div>
        
      </div>
    </section>
  );
}

export default FifthSection;
