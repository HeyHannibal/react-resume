import React, { Component, useState, useEffect } from "react";
import uniqid from "uniqid";
import ClearIcon from "@mui/icons-material/Clear";

const CvSkills = (props) => {


  const [currentInput, setCurrentInput] = useState('')
  const [skills, setSkills] = useState([])

  useEffect(() => {
    if (props.useDefault) {
      setSkills(() => props.default);
    }
    props.onChange("skills", skills);
    console.log(skills)
  },[skills]);

  

 function addSkill(e) {
  e.preventDefault();
  let newSkill = {
      skill: currentInput,
      id: uniqid(),
    };
    setCurrentInput('')
    setSkills((prevState) => [...prevState,newSkill])
  }

 function handleChange(e) {
    setCurrentInput(e.target.value)  
  }

  function deleteSkill(e) {
    let id = e.target.id 
    setSkills((prevState) => prevState.filter(item => item.id !== id))
  }


    let skillList = skills.map((item) => (
      <li key={item.id} className="skillListItem">
        {item.skill}
        <ClearIcon id={item.id} onClick={deleteSkill} />
      </li>
    ));

    return (
      <div id="skillsForm">
        <h3>Skills</h3>
        <form onSubmit={addSkill} id="skillsForm">
          <input
            type="text"
            id="skillsFormInput"
            value={currentInput}
            onChange={handleChange}
          ></input>
          <button className="addNewField" type="submit">
            ➕ Add Skill
          </button>
        </form>
        <ul id="skillList">{skillList}</ul> 
      </div>
    );
  
}

export default CvSkills;
