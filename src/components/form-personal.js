import React, { Component } from 'react';
import DisplayPhoto from './load-photo';

class CvFormPersonal extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.state = {
      fullName: '',
      title: '',
      tel: '',
      email: '',
      aboutMe: '',
      location: '',
    };
  }

  componentDidUpdate() {
    if (this.props.useDefault) {
      this.setState(this.props.default);
    }
  }

  handleChange(event) {
    const { value } = event.target;
    const key = event.target.name;

    this.setState({
      [key]: value,
    });
  }

  onFormChange(e) {
    e.preventDefault();
    this.props.onChange(e, 'personalInfo');
  }

  render() {
    const {
      fullName, location, title, tel, email, aboutMe,
    } = this.state;
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

          <label htmlFor="fullName">
            Full Name
            <input
              name="fullName"
              type="text"
              value={fullName}
              onChange={this.handleChange}
              placeholder="Full Name"
            />
          </label>
          <label htmlFor="location">
            Location
            <input
              name="location"
              type="text"
              value={location}
              onChange={this.handleChange}
              placeholder="Country, City, State"
            />
          </label>
          <label htmlFor="title">
            Job Title
            <input
              name="title"
              type="text"
              value={title}
              onChange={this.handleChange}
              onClick={this.onClickBtn}
              placeholder="Title"
            />
          </label>
          <label htmlFor="tel">
            Phone Number
            <input
              name="tel"
              type="tel"
              value={tel}
              placeholder="+1 000 0000000"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
              placeholder="name@mail.com"
            />
          </label>
          <label htmlFor="aboutMe" className="textareaLabel">
            Professional Summary
            <textarea
              name="aboutMe"
              id="aboutMeTextarea"
              className="textareaCV"
              rows="6"
              value={aboutMe}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default CvFormPersonal;
