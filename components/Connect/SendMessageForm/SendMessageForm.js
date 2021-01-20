import React, { useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export const SendMessageForm = ({articleData}) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
      message: ""
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axios({
      method: "POST",
      url: "http://localhost:3000/api/comments",
      data: {
        form: form,
        articleData: articleData.article
      }
    })
      .then(function() {
        console.log("Comment successfully submitted");
        resetForm();
        setHasSubmitted(true);
        setIsLoading(false);
      })
      .catch(function(error) {
        console.error("Error submitting comment: ", error);
      });
  };

  const DisplayMessage = () => {
    if (hasSubmitted) {
      return (
        <div className="display-message">
          We appreciate you!
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
          <div id="email-and-message-container">
            <div className="label-input-flex">
              <label>Email</label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={e => updateForm(e)}
              />
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
            <DisplayMessage />
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
        </div>
      </form>
    </section>
  );
};