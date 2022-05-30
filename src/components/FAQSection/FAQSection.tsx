import React, { useState } from "react";
import "./FAQSection.scss";
const questions = [
  {
    id: "1",
    question: "What are NFTs",
    explanations: [
      "NFT’s stand for Non Fungible Token - a digital asset that represents real-world objects like art, music, in-game items and videos. They are bought and sold online, frequently with cryptocurrency,",
    ],
  },
  {
    id: "2",
    question: "What are Atomheads",
    explanations: [
      "Atomheads is inifinite NFT Art Collection powered by Immutable X. In both Web 3 & Real Life, all matter is made of atoms & such, all atoms are made to matter. Atomheads is on a mission to make NFT’s accesible to all, and grow the Web3 space the way it was intended - for everyone, by everyone.",
    ],
  },
  {
    id: "3",
    question: "COST TO CREATE AN Atomhead?",
    explanations: [
      "Atomhead NFT’s are infinitied & are completely FREE to claim, till infinity & beyond.",
      "There is the option to pay to mint at an affordable price of 0.01 ETH for a chance at a few rare traits in your Atomhead. Energy in = Energy out.",
    ],
  },
  {
    id: "4",
    question: "ENERGY REQUIRED FOR AN ATOMHEAD?",
    explanations: [
      "Atomheads is powered by Immutable X, a Layer 2 Network on the Ehtereum Blockchain. Energy usage for all mints is exponentially lower, making Atomheads the most sustainable NFT to date.",
    ],
  },
  {
    id: "5",
    question: "What is the web3 law of matter",
    explanations: [
      "Atomheads can be created, but not destroyed. Atomheads live immutably on the Blockchain",
      "Atomheads exists in and for all things matter and that matter. Welcome to the Atomhead Universe.",
    ],
  },
  {
    id: "6",
    question: "How do I  get my own Atomhead?",
    explanations: [
      "sometext first paragraph",
      "sometext second paragraph",
      "sometext third paragraph",
      "sometext fourth paragraph",
    ],
  },
  {
    id: "7",
    question: "How do enter the atomic universe",
    explanations: [
      "sometext first paragraph",
      "sometext second paragraph",
      "sometext third paragraph",
    ],
  },
];
const explanationsEl = (question: String, explanations: Array<string>) => {
  return (
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
    <section className="faq-section">
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
                    explanationsEl(el.question, el.explanations)
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
