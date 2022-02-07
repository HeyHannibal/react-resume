import "./App.css";
import React, { useState, useEffect } from "react";
import CvFormPersonal from "./components/form-personal";
import CvFormWorkExp from "./components/form-work-exp";
import CvFormEducation from "./components/form-education";
import CvSkills from "./components/form-skills";
import ViewCV from "./components/view";
import defaultCV from "./components/defaultCV";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function App() {
  const [CV, setCV] = useState({
    personalInfo: {
      fullName: "",
      title: "",
      tel: "",
      email: "",
      aboutMe: "",
    },
    workExp: [
    ],
    education: [
    ],
    skills: [],
    isHidden: false,
    useDefault: false,
  })



  function loadDefault() {
    setCV(defaultCV)
  }

  useEffect(() => {
    if (CV.useDefault) {
      setCV((prev) => ({
        ...prev,
        useDefault: false 
      })
      )
    
    }
  })

  function changeArray(key, arr) {
    let newState = Object.assign({}, CV);
    newState[key] =  arr;
    setCV(newState);
    console.log(CV)

  };

  function changeValue(event, key) {
    let newState = Object.assign({}, CV);
    newState[key][event.target.name] = event.target.value;
    newState.isEmpty = false
    setCV(newState);
  };
  
  function deleteFromArr(id) {
    let newState = Object.assign({}, CV);
    let toDelete = newState.skills.findIndex((item) => item.id === id);
    newState.skills.splice(toDelete, 1);
    setCV(newState);
  };

  function hideView() {
    CV.isHidden
      ? setCV((prev) => ({...prev, isHidden: false }))
      : setCV((prev) => ({...prev, isHidden: true }));
  }

  function addImg(url) {
    setCV((prev) => ({
      ...prev,
      photo: url 
    })
    )
  }
  
    return (
      <div id="appCont" className={CV.isHidden ? "viewIsHidden" : ""}>
        <button
          id="hideViewBtn"
          onClick={hideView}
          className={CV.isHidden ? "onWhite" : ""}
        >
          <VisibilityOffIcon sx={{ fontSize: 50 }} />
        </button>
        <div id="editorCV">
          <CvFormPersonal
            addImg={addImg}
            onChange={changeValue}
            default={CV.personalInfo}
            useDefault={CV.useDefault}
          />
          <CvFormWorkExp
            onChange={changeArray}
            update={deleteFromArr}
            useDefault={CV.useDefault}
            default={CV.workExp}
          />
          <CvFormEducation
            onChange={changeArray}
            default={CV.education}
            useDefault={CV.useDefault}
          />
          <CvSkills
            onChange={changeArray}
            useDefault={CV.useDefault}
            default={CV.skills}
          />
          <div id='loadExampleDiv'><button id='loadExampleBtn' onClick={loadDefault}>Load Example</button></div>
        </div>
        <div
          id="pushLeft"
          className={CV.isHidden ? "hideCV" : "showCV"}
        ></div>
        <ViewCV
          id="View"
          className="page"
          info={CV}
          deleteSkill={deleteFromArr}
        />
      </div>
    );
  }


export default App;
