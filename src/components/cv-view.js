import React, { Component } from 'react'
import uniqid from 'uniqid'

class viewCV extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.deleteSkill = this.deleteSkill.bind(this)
    }

    deleteSkill (e) {
        console.log(e.target.id)
        this.props.deleteSkill(e.target.id)
    }

    render() {
     const props = this.props.info;
        const workExp = this.props.info.workExp.map((item) =>
        <div key={item.id}>
            <p>{item.dateFrom}-{item.dateTo}</p>
            <h4>{item.position}</h4>
            <h5>{item.company}</h5>
            <p>{item.description}</p>
        </div>
        );
        
        const education = this.props.info.education.map((item) =>
        <div key={item.id}>
            <p>{item.dateFrom}-{item.dateTo}</p>
            <h4>{item.degree}</h4>
            <h5>{item.school}</h5>
            <p>{item.description}</p>
        </div>
        );

        const skills = this.props.info.skills.map((item) =>
        <li key={item.id}>        
            {item.skill} 
    
            <a id={item.id} 
            onClick={this.deleteSkill}>
            delete
            </a> 
        </li>
      );

        return (
            <div id='resultCV'>
              <div id='personalInfoView'>
                <h1>{props.personalInfo.fullName}</h1>
                <h2>{props.personalInfo.title}</h2>
                <a href='tel'>{props.personalInfo.tel}</a>
                <p>{props.personalInfo.email}</p>
                <p>{props.personalInfo.aboutMe}</p>
              </div>
              <div id='workExperienceView'>
                  {workExp}
              </div>
              <div id='educationView'>
                  {education}
              </div>
              <div id='skillsView'>
                  <ul>{skills}</ul>
              </div>
            </div>
        )
    }
}

export default viewCV