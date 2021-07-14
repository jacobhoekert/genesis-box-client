import React, { useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export const EmailListForm = ({isFooter}) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axios({
      method: "POST",
      url: "https://genesis-box-client.vercel.app/api/subscribeToMailChimp",
      data: form
    })
      .then(function() {
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
          Thank you for joining The Genesis Box!
        </div>
      );
    } else {
      return <div className="display-message"></div>;
    }
  };

  return (
    <div id="email-list-form-container" style={{marginTop: isFooter && '30px'}}>
      <form id="email-list-form" onSubmit={handleSubmit} method="POST">
      <input type="hidden" name="u" value="126b76b76358b5694e3d0c7d5"></input>
      <input type="hidden" name="id" value="179cc6b0e3"></input>
        <div id="questions">
          <div id="names-container">
            <div className="label-input-flex">
              <label style={{color: isFooter && '#F6F1E9'}}>First Name</label>
              <input
                className="name-inputs"
                name="firstName"
                value={form.firstName}
                onChange={e => updateForm(e)}
              />
            </div>
            <div className="label-input-flex">
              <label style={{color: isFooter && '#F6F1E9'}}>Last Name</label>
              <input
                className="name-inputs"
                name="lastName"
                value={form.lastName}
                onChange={e => updateForm(e)}
              />
            </div>
          </div>
          <div id="email-container">
            <div className="label-input-flex">
              <label style={{color: isFooter && '#F6F1E9'}}>Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={e => updateForm(e)}
              />
            </div>
          </div>
          
          <div id="submit-row">
            <button type="submit" style={{background: isFooter && '#8DB5BC', width: isFooter && '175px'}}>
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
    </div>
  );
};