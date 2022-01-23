import React, { Component } from "react";
import "../cv-view.css";
import "../cv-content.css";
import ClearIcon from "@mui/icons-material/Clear";
import defaultImg from '../assets/avatar.png'


class viewCV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
    this.deleteSkill = this.deleteSkill.bind(this);
  }

  deleteSkill(e) {
    this.props.deleteSkill(e.target.id);
  }

  onImageChange() {
    let img = this.props.myImage;
    this.setState({
      image: URL.createObjectURL(img),
    });
  }
  componentDidUpdate() {
    console.log(this.props)
  }

 
  render() {
    const dateToString = (str) => {
      const date = new Date(str);
      return date.toLocaleString("default", { year: "numeric", month: "long" });
    };


    const props = this.props.info;
    const workExp = this.props.info.workExp.map((item) => (
      <div key={item.id} className="workExp">
        <h4>{item.position}</h4>
        <h4> at </h4>
        <h4>{item.company}</h4>
        <p className="dates">
          {dateToString(item.dateFrom)} - {dateToString(item.dateTo)}
        </p>
        <p>{item.description}</p>
      </div>
    ));

    const education = this.props.info.education.map((item) => (
      <div key={item.id}>
        <h4>{item.degree}</h4>
        <h4>, </h4>
        <h4>{item.school}</h4>
        <p className="dates">
          {dateToString(item.dateFrom)}-{dateToString(item.dateTo)}
        </p>
        <p>{item.description}</p>
      </div>
    ));

    const skills = this.props.info.skills.map((item) => (
      <li key={item.id}>
        <p>{item.skill}</p>

        <a id={item.id} onClick={this.deleteSkill}>
          <ClearIcon />
        </a>
      </li>
    ));

    const isHidden = props.isHidden;
    return (

      <div id="resultCont" className={isHidden ? "hideCV" : "showCV"}>
        <div id="resultCV" className={(props.isEmpty) ? 'resultEmpty' : ''}  >
          <div id="contentContainerCV">
            <header id="mainPersonal" >
              <img id="CVphoto" src={(props.photo) ? props.photo : defaultImg}></img>
              <div id="header">
                <h1>{props.personalInfo.fullName}</h1>
                <h2>{props.personalInfo.title}</h2>
              </div>
              <a href="tel">{props.personalInfo.tel}</a>
              <p>{props.personalInfo.email}</p>
            </header>
            <div id="mainContent" >
              <div id="personalInfoView">
                <h6>Profile</h6>
                <p>{props.personalInfo.aboutMe}</p>
              </div>
              <h6>Work Experience</h6>
              <div id="workExperienceView">{workExp}</div>
              <h6>Education</h6>
              <div id="educationView">{education}</div>
              <h6>Skills</h6>
              <div id="skillsView">
                <ul>{skills}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default viewCV;
