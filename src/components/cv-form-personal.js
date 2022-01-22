import React, { Component } from "react";
import DisplayPhoto from "./cv-load-photo";

class CvFormPersonal extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.state = {
      fullName: "",
      title: "",
      tel: "",
      email: "",
      aboutMe: "",
      photo: "",
    };
  }

  onFormChange(e) {
    e.preventDefault();
    this.props.onChange(e, "personalInfo");
  }

  handleChange(event) {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({
      [key]: value,
    });
  }

  onImageChange = (event) => {
    this.props.onPhotoUpload();
  };

  render() {
    return (
      <div>
        <h3>Personal Details</h3>

        <form
          autoComplete="off"
          id="PersonalInfo"
          action="#"
          onChange={this.onFormChange}
        >
          <DisplayPhoto onChange={this.props.onPhotoUpload} />

          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              value={this.state.fullName}
              onChange={this.handleChange}
              placeholder="Full Name"
            ></input>
          </label>
          <label>
            Location
            <input
              name="location"
              type="text"
              value={this.state.loacation}
              onChange={this.handleChange}
              placeholder="Country, City, State"
            ></input>
          </label>
          <label>
            Job Title
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              onClick={this.onClickBtn}
              placeholder="Title"
            ></input>
          </label>
          <label>
            Phone Number
            <input
              name="tel"
              type="tel"
              placeholder="+1 000 0000000"
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            ></textarea>
          </label>
        </form>
      </div>
    );
  }
}

export default CvFormPersonal;
