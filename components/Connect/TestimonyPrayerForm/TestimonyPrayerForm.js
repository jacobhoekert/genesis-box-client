import React, { useState, useEffect} from "react";
import axios from "axios";
import StrapiApi from '../../../axios/StrapiApi'
import ClipLoader from "react-spinners/ClipLoader";

export const TestimonyPrayerForm = () => {
  const [isPrayerChecked, setIsPrayerChecked] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    type: "prayer",
    message: ""
  });

  const updateForm = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect( () => {
    console.log(form);
  }, [form])

  const resetForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      location: "",
      type: "",
      message: ""
    });
  };

  const handleCheckBoxClick = e => {
    let typeValue = "";
    if (e.target.checked) {
      typeValue = e.target.name;
      if (e.target.name == "prayer") {
        setIsPrayerChecked(true);
      } else {
        setIsPrayerChecked(false);
      }
    }
    setForm({ ...form, type: typeValue });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);

    axios({
      method: "POST",
      url: "/api/sendEmail",
      data: form
    })
    
    switch (form.type) {
      case "prayer":
        StrapiApi.post('/connect-prayers', {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          location: form.location,
          message: form.message,
          date: new Date()
        })
        .then(function() {
          resetForm();
          setHasSubmitted(true);
          setIsLoading(false);
        })
        .catch(function(error) {
          console.error(error);
        });
        break;
      case "testimony":
        StrapiApi.post('/connect-testimonies', {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          location: form.location,
          message: form.message,
          date: new Date()
        })
        .then(function() {
          resetForm();
          setHasSubmitted(true);
          setIsLoading(false);
        })
        .catch(function(error) {
          console.error(error);
        });
        break;
    }
  };

  const DisplayMessage = () => {
    if (hasSubmitted) {
      return (
        <div className="display-message">
          Thank you so much!
        </div>
      );
    } else {
      return <div className="display-message"></div>;
    }
  };

  return (
    <section id="testimony-prayer-form-container">
      <form id="testimony-prayer-form" onSubmit={handleSubmit} method="POST">
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
          <div id="email-location-message-container">
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
              <label>Where are you from?</label>
              <input
                id="location"
                name="location"
                value={form.location}
                onChange={e => updateForm(e)}
              />
            </div>
            <div className="label-input-flex">
              <label>Message</label>
              <div className="checkbox-containers-container">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="prayer" 
                    name="prayer"
                    value={form.prayer}
                    checked={isPrayerChecked}
                    onChange={e => handleCheckBoxClick(e)}
                  />
                  <label>Prayer</label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="testimony" 
                    name="testimony"
                    value={form.testimony}
                    checked={!isPrayerChecked}
                    onChange={e => handleCheckBoxClick(e)}
                  />
                  <label>Testimony</label>
                </div>
              </div>
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