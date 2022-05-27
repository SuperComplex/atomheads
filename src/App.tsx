// import { useState, useEffect } from "react";
import Header from 'components/Header/Header';
import TopSection from 'components/TopSection/TopSection';
import SecondSection from 'components/SecondSection/SecondSection';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopSection/>
      <SecondSection/>
    </div>
  );
}

export default App;
