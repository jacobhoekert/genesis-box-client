import React, { useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export const CommentForm = ({articleData}) => {
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
      url: "https://genesis-box-client.vercel.app/api/comments",
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
    <section id="blog-comments">
      <form id="comment-form" onSubmit={handleSubmit} method="POST">
        <h4 className="leave-comment">Leave a comment</h4>
        <div id="questions">
          <div id="names">
            <input
              className="name-inputs"
              name="firstName"
              value={form.firstName}
              onChange={e => updateForm(e)}
              placeholder="First Name"
            />
            <input
              className="name-inputs"
              name="lastName"
              value={form.lastName}
              onChange={e => updateForm(e)}
              placeholder="Last Name"
            />
          </div>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={e => updateForm(e)}
            placeholder="Email Address"
          />
          <textarea
            rows="5"
            id="message"
            name="message"
            value={form.message}
            onChange={e => updateForm(e)}
            placeholder="Message"
          ></textarea>
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
                <p>Submit</p>
              )}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};