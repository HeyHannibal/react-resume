import React, { Component } from "react";
import DisplayPhoto from "./load-photo";

class CvFormPersonal extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.state = {
      current: {
        fullName: "",
        title: "",
        tel: "",
        email: "",
        aboutMe: "",
        photo: "",
        location: "",
      },
      default: {
          fullName: "John Doe",
          title: "Full Stack Developer",
          tel: "+1 942 9531393",
          email: "johndoe@email.com",
          location: 'Springfield',
          aboutMe: `Experienced Web Developer adept in all stages of advanced 
                       web development. Knowledgeable in user interface, testing, and 
                  debugging processes. Equipped with a diverse and promising 
                  skill-set. Able to effectively self-manage during independent 
                  projects, as well as collaborate in a team setting.`,
          photo: './src/assets/avatar.png'
      }
    };
  }

  componentDidUpdate() {
<<<<<<< HEAD
      if (this.props.useDefault) {
        this.setState((state) => {
          console.log('used Default')
          return {current : state.default }
        });
        this.props.updateParent('personalInfo', this.state.default)

      }
=======
    if(this.props.useDefault) {
      this.setState(this.props.default)
    }
>>>>>>> old-state
  }

  onFormChange(e) {
    e.preventDefault();
    this.props.onChange(e, "personalInfo");
  }

  handleChange(event) {
    console.log(this.state)
    const value = event.target.value;
    const key = event.target.name;

    this.setState({current:{[key]: value, }});
  }

  onImageChange = () => {
    this.props.updateParent();
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
              value={this.state.current.fullName}
              onChange={this.handleChange}
              placeholder="Full Name"
            ></input>
          </label>
          <label>
            Location
            <input
              name="location"
              type="text"
              value={this.state.current.location}
              onChange={this.handleChange}
              placeholder="Country, City, State"
            ></input>
          </label>
          <label>
            Job Title
            <input
              name="title"
              type="text"
              value={this.state.current.title}
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
              value={this.state.current.tel}
              placeholder="+1 000 0000000"
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={this.state.current.email}
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
              value={this.state.current.aboutMe}
              onChange={this.handleChange}
            ></textarea>
          </label>
        </form>
      </div>
    );
  }
}

export default CvFormPersonal;
