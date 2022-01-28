import React, { Component } from "react";
import "../cv-view.css";
import "../cv-content.css";
import defaultImg from '../assets/avatar.png'


const ViewCV = (props) => {
  const dateToString = (str) => {
    const date = new Date(str);
    return date.toLocaleString("default", { year: "numeric", month: "long" });
  };

  const workExp = props.info.workExp.map((item) => (
    <div key={item.id} className="workExp">
      <h4>{item.position}</h4>
      <h4>at</h4>
      <h4>{item.company}</h4>
      <p className="dates">
        {dateToString(item.dateFrom)} - {dateToString(item.dateTo)}
      </p>
      <p>{item.description}</p>
    </div>
  ));

  const education = props.info.education.map((item) => (

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

  const skills = props.info.skills.map((item) => (
    <li key={item.id}>
      <p>{item.skill}</p>
    </li>
  ));


  return (

    <div id="resultCont" >
      <div id="resultCV" className={(props.info.isEmpty) ? 'resultEmptyNah' : 'Nah'}  >
        <div id="contentContainerCV">
          <header id="mainPersonal" >
            <img id="CVphoto" src={(props.info.photo) ? props.info.photo : defaultImg}></img>
            <div id="header">
              <h1>{props.info.personalInfo.fullName}</h1>
              <h2>{props.info.personalInfo.title}</h2>
            </div>
            <a href="tel">{props.info.personalInfo.tel}</a>
            <p>{props.info.personalInfo.email}</p>
          </header>
          <div id="mainContent" >
            <div id="personalInfoView">
              <h6>Profile</h6>
              <p>{props.info.personalInfo.aboutMe}</p>
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


export default ViewCV;
