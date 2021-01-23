import React, { useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export const SendMessageForm = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: ""
  });

  const updateForm = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      topic: "",
      message: ""
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axios({
      method: "POST",
      url: "https://genesis-box-client.vercel.app/api/sendEmail",
      data: form
    })
      .then(function(result) {
        console.log(result);
        resetForm();
        setHasSubmitted(true);
        setIsLoading(false);
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  const DisplayMessage = () => {
    if (hasSubmitted) {
      return (
        <div className="display-message">
          Thanks! We'll get back to you shortly!
        </div>
      );
    } else {
      return <div className="display-message"></div>;
    }
  };

  return (
    <section id="send-message-form-container">
      <form id="send-message-form" onSubmit={handleSubmit} method="POST">
        <div id="questions">
          <div id="names-container">
            <div className="label-input-flex">
              <label>First Name</label>
              <input
                className="name-inputs"
                name="firstName"
                value={form.firstName}
                onChange={e => updateForm(e)}
              />
            </div>
            <div className="label-input-flex">
              <label>Last Name</label>
              <input
                className="name-inputs"
                name="lastName"
                value={form.lastName}
                onChange={e => updateForm(e)}
              />
            </div>
          </div>
          <div id="email-topic-message-container">
            <div className="label-input-flex">
              <label>Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={e => updateForm(e)}
              />
            </div>
            <div className="label-input-flex">
              <label>Topic</label>
              <select className="topic-select" name="topic" onChange={e => updateForm(e)}>
                <option value="connect with our team">connect with our team</option>
                <option value="request for partnership">request for partnership</option>
                <option value="share missionary connection">share missionary connection</option>
                <option value="share artisan connection">share artisan connection</option>
                <option value="other">other</option>
              </select>
            </div>
            <div className="label-input-flex">
              <label>Message</label>
              <textarea
                rows="5"
                id="message"
                name="message"
                value={form.message}
                onChange={e => updateForm(e)}
              ></textarea>
            </div>
          </div>
          
          <div id="submit-row">
            <button type="submit">
              {isLoading ? (
                <ClipLoader
                  size={20}
                  color={"rgb(7, 156, 241)"}
                  loading={true}
                />
              ) : (
                <p>SUBMIT</p>
              )}
            </button>
          </div>
          <DisplayMessage />
        </div>
      </form>
    </section>
  );
};