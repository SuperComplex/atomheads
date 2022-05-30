// import { useState, useEffect } from "react";
import Header from 'components/Header/Header';
import TopSection from 'components/TopSection/TopSection';
import SecondSection from 'components/SecondSection/SecondSection';
import ThirdSection from 'components/ThirdSection/ThirdSection';
import FourthSection from 'components/FourthSection/FourthSection';
import FifthSection from 'components/FifthSection/FifthSection';
import SixthSection from 'components/SixthSection/SixthSection';
import SeventhSection from 'components/SeventhSection/SeventhSection';
import FAQSection from 'components/FAQSection/FAQSection';
import FormSection from 'components/FormSection/FormSection';
import Footer from 'components/Footer/Footer';
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
      <SixthSection/>
      <SeventhSection/>
      <FAQSection/>
      <FormSection/>
      <Footer/>
    </div>
  );
}

export default App;
