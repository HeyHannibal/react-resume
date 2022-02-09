/* eslint-disable react/destructuring-assignment */
import './App.css';
import React, { Component } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CvFormPersonal from './components/form-personal';
import CvFormWorkExp from './components/form-work-exp';
import CvFormEducation from './components/form-education';
import CvSkills from './components/form-skills';
import ViewCV from './components/view';
import defaultCV from './components/defaultCV';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        fullName: '',
        title: '',
        tel: '',
        email: '',
        aboutMe: '',
      },
      workExp: [
      ],
      education: [
      ],
      skills: [],
      isEmpty: true,
    };
    this.loadDefault = this.loadDefault.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.hideView = this.hideView.bind(this);
    this.addImg = this.addImg.bind(this);
  }

  componentDidUpdate() {
    if (this.state.useDefault) this.setState({ useDefault: false });
  }

  changeArray = (key, arr) => {
    const newState = { ...this.state };
    newState[key] = arr;
    this.setState(newState);
  };

  changeValue = (event, key) => {
    const newState = { ...this.state };
    newState[key][event.target.name] = event.target.value;
    this.setState(newState);
  };

  deleteFromArr = (id) => {
    const newState = { ...this.state };
    const toDelete = newState.skills.findIndex((item) => item.id === id);
    newState.skills.splice(toDelete, 1);
    this.setState(newState);
  };

  loadDefault() {
    this.setState(defaultCV);
  }

  hideView() {
    (this.state.isHidden)
      ? this.setState({ isHidden: false })
      : this.setState({ isHidden: true });
  }

  addImg(url) {
    const newState = { ...this.state };
    newState.photo = url;
    this.setState(newState);
  }

  render() {
    return (
      <div id="appCont" className={this.state.isHidden ? 'viewIsHidden' : ''}>
        <button
          type="button"
          id="hideViewBtn"
          onClick={this.hideView}
          className={this.state.isHidden ? 'onWhite' : ''}
        >
          <VisibilityOffIcon sx={{ fontSize: 50 }} />
        </button>
        <div id="editorCV">
          <CvFormPersonal
            onChange={this.changeValue}
            addImg={this.addImg}
            default={this.state.personalInfo}
            useDefault={this.state.useDefault}
          />
          <CvFormWorkExp
            onChange={this.changeArray}
            update={this.delete}
            useDefault={this.state.useDefault}
            default={this.state.workExp}
          />

          <CvFormEducation
            onChange={this.changeArray}
            default={this.state.education}
            useDefault={this.state.useDefault}
          />
          <CvSkills
            onChange={this.changeArray}
            useDefault={this.state.useDefault}
            default={this.state.skills}
          />
          <div id="loadExampleDiv"><button type="button" id="loadExampleBtn" onClick={this.loadDefault}>Load Example</button></div>
        </div>
        <div
          id="pushLeft"
          className={this.state.isHidden ? 'hideCV' : 'showCV'}
        />
        <ViewCV
          id="View"
          className="page"
          info={this.state}
          deleteSkill={this.deleteFromArr}
        />
      </div>
    );
  }
}

export default App;
