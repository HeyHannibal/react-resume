import React, { Component } from 'react'
import uniqid from 'uniqid'
import '../cv-view.css'
class viewCV extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden:false,
        };
        this.deleteSkill = this.deleteSkill.bind(this)
        this.onImageChange = this.onImageChange.bind(this);
    }

    deleteSkill (e) {
        console.log(e.target.id)
        this.props.deleteSkill(e.target.id)
    }

    onImageChange() {
        let img = this.props.myImage
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
        componentDidUpdate() {
            console.log(this.props)
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
      
      

      const isHidden = props.isHidden;
        return (
            <div id='resultCont' className={(isHidden) ? 'hideCV' : 'showCV' }>
            <div  id='resultCV' ref={this.viewRef}>
              <div id='personalInfoView'>
                <h1>{props.personalInfo.fullName}</h1>
                <h2>{props.personalInfo.title}</h2>
                <a href='tel'>{props.personalInfo.tel}</a>
                <p>{props.personalInfo.email}</p>
                <p>{props.personalInfo.aboutMe}</p>
                 <img id='CVphoto' src={(props.photo)}></img> 
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
           </div> 
        )
    }
}

export default viewCV