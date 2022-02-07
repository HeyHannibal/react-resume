import React, { Component } from "react";
import DisplayPhoto from "./load-photo";

class CvFormPersonal extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.state = {
      fullName: "",
      title: "",
      tel: "",
      email: "",
      aboutMe: "",
      photo: "",
      location:""
    };
  }


  componentDidUpdate() {
    if(this.props.useDefault) {
      this.setState(this.props.default)
    }
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
          <DisplayPhoto addImg={this.props.addImg} />

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
              value={this.state.location}
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
              value={this.state.tel}
              placeholder="+1 000 0000000"
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={this.state.email}

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
              value={this.state.aboutMe}
              onChange={this.handleChange}
            ></textarea>
          </label>
        </form>
      </div>
    );
  }
}

export default CvFormPersonal;
