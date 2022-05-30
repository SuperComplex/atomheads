import React, { useState } from "react";
import "./FormSection.scss";

const sendEmail = async (sendData: Object) => {
  const response = await fetch('https://testapi.io/api/OlehPshyk/testatomheads', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sendData)
  })
  const data = await response.json();
  return data
}
function FormSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (email: String) => (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO remove console from here
    console.log(email);
    if (email === '' || email === null) {
      setMessage('Email is missing!');
      return
    }
    //TODO request to some API for sending email or something else...
    let data = {
      sender: window.location.hostname,
      email: email
    }
    sendEmail(data).then(res => {
      //TODO remove console from here
      console.log(res)
      setMessage(res);
    });
    setEmail('');
  }

  return (
    <section className="form-section">
      <div className="form-section-container wrapper">
        <div className="section-title">
          Bonds & Connections <br/> Matter because of Atoms.
        </div>
        <form className="email-form" action="" onSubmit={ (e) => handleSubmit(email)(e)}>
          <div className="input-box">
            <input 
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={message?() => setMessage(''):undefined}
              // onKeyDown={message?() => setMessage(''):undefined}
            />
            {message&&<span className="message">{message}</span>}
          </div>
          <button className="submit-btn" type="submit">Let’s Bond</button>
        </form>
      </div>
    </section>
  );
}

export default FormSection;
