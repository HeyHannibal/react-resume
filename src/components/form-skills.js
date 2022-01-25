import React, { Component } from "react";
import uniqid from "uniqid";
import ClearIcon from "@mui/icons-material/Clear";

class CvSkills extends Component {
  constructor(props) {
    super(props);
    this.addSkill = this.addSkill.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.state = {
      currentInput: "",
      skills: [],
    };
  }

  componentDidUpdate() {
    if (this.props.useDefault) {
      this.setState({ skills: this.props.default });
    }
  }

  addSkill(e) {
    let newState = Object.assign({}, this.state);
    let newSkill = {
      skill: this.state.currentInput,
      id: uniqid(),
    };
    newState.skills.push(newSkill);
    newState.currentInput = "";
    this.setState(newState);
    this.props.onChange("skills", this.state.skills);
    e.preventDefault();
  }

  handleChange(event) {
    this.setState({
      currentInput: event.target.value,
    });
  }

  deleteSkill(event) {
    let newSkills = [...this.state.skills];
    let index = newSkills.findIndex(
      (item) => item.id.toString() === event.target.id.toString()
    );
    newSkills.splice(index, 1);
    this.setState({ skills: newSkills });
  }

  render() {
    const skills = this.state.skills.map((item) => (
      <li key={item.id} className="skillListItem">
        {item.skill}
        <ClearIcon id={item.id} onClick={this.deleteSkill} />
      </li>
    ));

    return (
      <div id="skillsForm">
        <h3>Skills</h3>
        <form onSubmit={this.addSkill} id="skillsForm">
          <input
            type="text"
            id="skillsFormInput"
            value={this.state.currentInput}
            onChange={this.handleChange}
          ></input>
          <button className="addNewField" type="submit">
            ➕ Add Skill
          </button>
        </form>
        <ul id="skillList">{skills}</ul>
      </div>
    );
  }
}

export default CvSkills;
