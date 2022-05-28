// import { useState, useEffect } from "react";
import Header from 'components/Header/Header';
import TopSection from 'components/TopSection/TopSection';
import SecondSection from 'components/SecondSection/SecondSection';
import ThirdSection from 'components/ThirdSection/ThirdSection';
import FourthSection from 'components/FourthSection/FourthSection';
import FifthSection from 'components/FifthSection/FifthSection';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
    </div>
  );
}

export default App;
