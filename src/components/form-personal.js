import React, { useState, useEffect } from "react";
import DisplayPhoto from "./load-photo";

const CvFormPersonal = (props) => {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    title: "",
    tel: "",
    email: "",
    aboutMe: "",
    location: "",
  });

  useEffect(() => {
    if (props.useDefault) {
      setPersonalDetails(() => props.default);
    }
  });

  function onFormChange(e) {
    e.preventDefault();
    props.onChange(e, "personalInfo");
  }

  function handleChange(event) {
    const value = event.target.value;
    const key = event.target.name;
    setPersonalDetails((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  return (
    <div>
      <h3>Personal Details</h3>

      <form
        autoComplete="off"
        id="PersonalInfo"
        action="#"
        onChange={onFormChange}>
          
        <DisplayPhoto onChange={props.onPhotoUpload} />

        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            value={personalDetails.fullName}
            onChange={handleChange}
            placeholder="Full Name"
          ></input>
        </label>
        <label>
          Location
          <input
            name="location"
            type="text"
            value={personalDetails.location}
            onChange={handleChange}
            placeholder="Country, City, State"
          ></input>
        </label>
        <label>
          Job Title
          <input
            name="title"
            type="text"
            value={personalDetails.title}
            onChange={handleChange}
            placeholder="Title"
          ></input>
        </label>
        <label>
          Phone Number
          <input
            name="tel"
            type="tel"
            value={personalDetails.tel}
            placeholder="+1 000 0000000"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={personalDetails.email}
            onChange={handleChange}
            placeholder="name@mail.com"
          ></input>
        </label>
        <label className="textareaLabel">
          Professional Summary
          <textarea
            name="aboutMe"
            id="aboutMeTextarea"
            className="textareaCV"
            rows="6"
            value={personalDetails.aboutMe}
            onChange={handleChange}
          ></textarea>
        </label>
      </form>
    </div>
  );
};

export default CvFormPersonal;
