import React, { useState } from "react";
import { Link } from "react-scroll";
import "./FAQSection.scss";
const questions = [
  {
    id: "1",
    question: "What are NFTS",
    explanations: [
      "NFT’s stand for Non Fungible Tokens - a digital asset that represents real-world objects like art, music, in-game items, and videos. They are bought and sold online, frequently with cryptocurrency.",
    ],
  },
  {
    id: "2",
    question: "What are Atomheads",
    explanations: [
      "Atomheads is inifinite NFT Art Collection powered by Immutable X. In both Web3 & Real Life, all matter is made of atoms & such, all atoms are made to matter. Atomheads is on a mission to make NFT’s accessible to all, and grow the Web3 space the way it was intended - for everyone, by everyone.",
    ],
  },
  {
    id: "3",
    question: "Cost to create an Atomhead",
    explanations: [
      "Atomhead NFT’s are infinite & are FREE to claim, till infinity & beyond.",
      "There is the option to pay to mint at an affordable price of 0.001 ETH for a chance at a few rare traits in your Atomhead. Energy in = Energy out.",
    ],
  },
  {
    id: "4",
    question: "EnerGy Required for an Atomhead",
    explanations: [
      "Atomheads is powered by Immutable X, a Layer 2 Network on the Ethereum Blockchain. Energy usage for all mints is exponentially lower, making Atomheads the most sustainable NFT to-date.",
    ],
  },
  {
    id: "5",
    question: "SO WHAT is THE WEB3 LAW OF MATTER",
    explanations: [
      "Atomheads can be created, but not destroyed. Atomheads live immutably on the Blockchain",
      "Atomheads exist in things matter and all things that matter. Welcome to the Atomhead Universe, let's bond!",
    ],
  },
  {
    id: "6",
    question: "HOW DO I GET MY OWN ATOMHEAD",
    explanations: [
      "Atomheads are available and accessible to all. Atomheads are free to claim BUT if you want rarer traits and atom arrangements, you can mint one",
    ],
  },
  {
    id: "7",
    question: "How do enter the atomic universe",
    explanations: [
      "All Atomheads live in the Web3 Vaccuum called Discord - join us alongside other Atomheads and build the bonds which make up the future of Web3.0:",
    ],
  },
];
const explanationsEl = ({id, question, explanations}:{id: string;question: string;explanations: string[];}) => {
  // const {id, question, explanations} = el;
  if(id === '6') {
    return (
      <div className="question-explanations">
        <p className="expl-title">{question}</p>
        {explanations && explanations.length ? (
          <div className="expl-text">
            <p>
              {explanations[0]}&nbsp;
              <Link
                activeClass="active"
                to="mint"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
              >
                here
              </Link>
            </p>
          </div>
        ) : null}
      </div>
    )
  } else if(id === '7') {
    return (
      <div className="question-explanations">
        <p className="expl-title">{question}</p>
        {explanations && explanations.length ? (
          <div className="expl-text">
            <p>
              {explanations[0]}&nbsp;
              <a href="http://atomheads.opshyk.click" target="_blank" rel="noreferrer">link</a>
            </p>
          </div>
        ) : null}
      </div>
    )
  } else return (
    <div className="question-explanations">
      <p className="expl-title">{question}</p>
      {explanations && explanations.length ? (
        <div className="expl-text">
          {explanations.map((explanation, i) => {
            return <p key={i}>{explanation}</p>;
          })}
        </div>
      ) : null}
    </div>
  );
};

function FAQSection() {
  const [showexplanationsId, setshowexplanationsId] = useState("");
  return (
    <section className="faq-section" id="faq">
      <div className="faq-section-container">
        <div className="faq-title">
          <img
            className="image-title"
            src="/img/faqquestion.svg"
            alt="faq-questions"
          />
        </div>
        <div className="list-container">
          <ul className="question-list">
            {questions.map((el) => {
              return (
                <li
                  key={el.id}
                  className="togle-question"
                  onClick={
                    () => setshowexplanationsId(showexplanationsId === el.id ? '' : el.id)}
                >
                  {showexplanationsId !== el.id ? (
                    <div className="question">{el.question}</div>
                  ) : (
                    // explanationsEl(el.question, el.explanations)
                    explanationsEl(el)
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
