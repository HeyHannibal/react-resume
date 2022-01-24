import "./styles/App.css";
import React, { Component } from "react";
import CvFormPersonal from "./components/form-personal";
import CvFormWorkExp from "./components/form-work-exp";
import CvFormEducation from "./components/form-education";
import CvSkills from "./components/form-skills";
import ViewCV from "./components/view";
import DefaultCv from "./components/default";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        fullName: "",
        title: "",
        tel: "",
        email: "",
        aboutMe: "",
      },
      workExp: [
        {
          company: "",
          position: "",
          id: "",
          dateFrom: "",
          dateTo: "",
          description: "",
        },
      ],
      education: [
        {
          degree: "",
          school: "",
          id: "",
          dateFrom: "",
          dateTo: "",
          description: "",
        },
      ],
      skills: [],
      isHidden: false,
      isEmpty: true,
    };
    this.loadDefault = this.loadDefault.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.hideView = this.hideView.bind(this);
    this.changeObj = this.changeObj.bind(this)
  }

  loadDefault() {
    this.setState({useDefault:true})
  }

  componentDidUpdate() {
    console.log(this.state)
    if(this.state.useDefault) this.setState({useDefault:false})
  }


    // this.setState(state)

  changeArray = (key, arr) => {
    let newState = Object.assign({}, this.state);
    newState[key] = arr;
    newState.isEmpty = false
    this.setState(newState);

  };

  addToArray = (key, obj) => {
    let newState = Object.assign({}, this.state);
    newState[key].push(obj);
    this.setState(newState);
  };

  changeValue = (event, key) => {
    let newState = Object.assign({}, this.state);
    newState[key][event.target.name] = event.target.value;
    newState.isEmpty = false
    this.setState(newState);
  };

  changeObj = (key, value) => {
    let newState = Object.assign({}, this.state);
    newState[key] = value;
    this.setState(newState);
  };

  deleteFromArr = (id) => {
    let newState = Object.assign({}, this.state);
    let toDelete = newState.skills.findIndex((item) => item.id === id);
    newState.skills.splice(toDelete, 1);
    this.setState(newState);
  };

  hideView() {
    this.state.isHidden
      ? this.setState({ isHidden: false })
      : this.setState({ isHidden: true });
  }

  render() {
    return (
      <div id="appCont" className={this.state.isHidden ? "viewIsHidden" : ""}>
        <button
          id="hideViewBtn"
          onClick={this.hideView}
          className={this.state.isHidden ? "onWhite" : ""}
        >
          <VisibilityOffIcon sx={{ fontSize: 50 }} />
        </button>
        <div id="editorCV">
          <CvFormPersonal
            onChange={this.changeValue}
            updateParent={this.changeObj}
            useDefault={this.state.useDefault}
          />
          <CvFormWorkExp
            name="WorkExperience"
            onChange={this.changeArray}
            update={this.delete}
            updateParent={this.changeObj}
            useDefault={this.state.useDefault}
          />

          <CvFormEducation 
            default={this.state.education[0]}
            onChange={this.changeArray} />
          <CvSkills 
          onChange={this.changeArray} 
          />
          <DefaultCv loadCV={this.loadDefault}></DefaultCv>
        </div>
        <div
          id="pushLeft"
          className={this.state.isHidden ? "hideCV" : "showCV"}
        ></div>
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
