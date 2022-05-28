// import { useState, useEffect } from "react";
import Header from 'components/Header/Header';
import TopSection from 'components/TopSection/TopSection';
import SecondSection from 'components/SecondSection/SecondSection';
import FourthSection from 'components/FourthSection/FourthSection';
import FifthSection from 'components/FifthSection/FifthSection';
import SixthSection from 'components/SixthSection/SixthSection';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopSection/>
      <SecondSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
    </div>
  );
}

export default App;
