import "./App.css";
import React, { Component } from "react";
import CvFormPersonal from './components/cv-form-personal'
import CvFormWorkExp from "./components/cv-form-work-exp";
import CvFormEducation from "./components/cv-form-education";
import CvSkills from './components/cv-form-skills'
import ViewCV from './components/cv-view'
import DefaultCv from "./components/cv-default";
import DisplayPhoto from './components/cv-load-photo';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personalInfo: {
        fullName: "",
        title: "",
        tel: "",
        email: "",
        aboutMe: "",
        myImage:""
      },
      workExp: [
        {
          company: '',
          position: '',
          id: '',
          dateFrom: '',
          dateTo: '',
          description: '',
        }
      ],
      education: [
        {
          degree: '',
          school: '',
          id: '',
          dateFrom: '',
          dateTo: '',
          description:"",
        }
      ],
      skills: [
      ],
      isHidden:false,
    };
    this.loadDefault = this.loadDefault.bind(this)
    this.changeValue = this.changeValue.bind(this);
    this.hideView = this.hideView.bind(this)
  }

  loadDefault(state) {
    this.setState(state)
  }

  changeArray = (key, arr) => {
    console.log(this.state)
    let newState = Object.assign({}, this.state);
    newState[key] = arr;
    this.setState(newState)
  }

  addToArray = (key, obj) => {
    let newState = Object.assign({}, this.state);
    newState[key].push(obj)
    this.setState(newState)
  }

  changeValue = (event, key) => {
    let newState = Object.assign({}, this.state)
    newState[key][event.target.name] = event.target.value
    this.setState(newState)
  }

  changeValuee = (value, key) => {
    let newState = Object.assign({}, this.state)
    newState[key] = value
    this.setState(newState)
  }

  deleteFromArr = (id) => {
    console.log(id)
    let newState = Object.assign({}, this.state)
    let toDelete = newState.skills.findIndex(item => item.id === id)
    newState.skills.splice(toDelete, 1)
    this.setState(newState)
  }

  

  hideView() {
    (this.state.isHidden) ? this.setState({isHidden: false}) :
                            this.setState({isHidden: true});
}

  render() {
    return (
      <div id='appCont' className={(this.state.isHidden) ? 'viewIsHidden' : ''}>
        <button id='hideViewBtn' onClick={this.hideView} className={(this.state.isHidden) ? 'onWhite' : ''} >
          <VisibilityOffIcon  sx={{ fontSize: 50 }} /> 
          </button>

        <div id='editorCV'>

          <CvFormPersonal onChange={this.changeValue} onPhotoUpload={this.changeValuee} />
          <CvFormWorkExp name='WorkExperience' onChange={this.changeArray} update={this.delete} />
          <CvFormEducation onChange={this.changeArray} />
          <CvSkills onChange={this.changeArray} />
          {/* <DefaultCv loadCV={this.loadDefault}></DefaultCv> */}
        </div>
        <div id='pushLeft' className={(this.state.isHidden) ? 'hideCV' : 'showCV'}></div>
        
          <ViewCV id='View' className='page' info={this.state} deleteSkill={this.deleteFromArr} />
      </div>
    )
  }
}


export default App;
