import React, { Component } from 'react';
import uniqid from 'uniqid';
import ClearIcon from '@mui/icons-material/Clear';

class CvFormEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationDefault: {
        degree: '',
        school: '',
        id: '',
        dateFrom: '',
        dateTo: '',
        description: '',
      },
      education: [
        {
          degree: '',
          school: '',
          id: uniqid(),
          dateFrom: '',
          dateTo: '',
          description: '',
        },
      ],
    };
    this.addField = this.addField.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.findInState = this.findInState.bind(this);
    this.deleteField = this.deleteField.bind(this);
    this.updateParent = this.updateParent.bind(this);
  }

  componentDidUpdate() {
    if (this.props.useDefault) {
      this.setState({ education: this.props.default });
    }
  }

  handleChange(event) {
    const eduArr = [...this.state.education];
    const ObjToUpdate = this.findInState(event.target.id);
    eduArr[ObjToUpdate][event.target.name] = event.target.value;
    this.setState({ education: eduArr });
  }

  findInState(id) {
    const eduArr = [...this.state.education];
    const ObjToUpdate = eduArr.findIndex(
      (item) => item.id.toString() === id.toString(),
    );
    return ObjToUpdate;
  }

  updateParent(e) {
    e.preventDefault();
    this.props.onChange('education', this.state.education);
  }

  addField() {
    const eduArr = [...this.state.education];
    const newEdu = { ...this.state.educationDefault };
    newEdu.id = uniqid();
    eduArr.push(newEdu);
    this.setState({ education: eduArr });
  }

  deleteField(event) {
    const eduArr = [...this.state.education];
    const index = this.findInState(event.target.id);
    eduArr.splice(index, 1);
    this.setState({ education: eduArr });
    this.props.onChange('education', eduArr);
  }

  render() {
    const currentDate = () => new Date().toISOString().split('T')[0];
    const activeField = (id) => this.state.education[this.findInState(id)];

    const inputs = this.state.education.map((item) => (
      <div className="experienceFormDiv" key={`${item.id}cont`}>
        <form
          action="#"
          className="experienceForm"
          onChange={this.updateParent}
        >
          <label htmlFor="school">
            School
            <input
              name="school"
              value={activeField(item.id).school}
              onChange={this.handleChange}
              id={item.id}
              placeholder="School"
              type="text"
              key={`${item.id}posInput`}
            />
          </label>

          <label htmlFor="degree">
            Degree
            <input
              name="degree"
              value={activeField(item.id).degree}
              onChange={this.handleChange}
              id={item.id}
              placeholder="Degree"
              type="text"
              key={`${item.id}compInput`}
            />
          </label>

          <label htmlFor="dateFrom">
            Start Date
            <input
              name="dateFrom"
              value={activeField(item.id).dateFrom}
              max={
                                activeField(item.id).dateTo !== ''
                                  ? activeField(item.id).dateTo
                                  : currentDate()
                            }
              onChange={this.handleChange}
              id={item.id}
              type="month"
              key={`${item.id}dateFromInput`}
            />
          </label>

          <label htmlFor="dateTo">
            End Date
            <input
              name="dateTo"
              value={activeField(item.id).dateTo}
              min={activeField(item.id).dateFrom}
              max={currentDate()}
              onChange={this.handleChange}
              id={item.id}
              placeholder="degree"
              type="month"
              key={`${item.id}dateToInput`}
            />
          </label>

          <label htmlFor="description" className="textareaLabel">
            Description
            <textarea
              name="description"
              value={activeField(item.id).description}
              rows="4"
              cols="40"
              onChange={this.handleChange}
              id={item.id}
              className="textareaCV"
              placeholder=""
              key={`${item.id}DescInput`}
            />
          </label>
        </form>
        <button
          type="button"
          onClick={this.deleteField}
          className="deleteForm"
          key={`${item.id}del`}
          id={item.id}
        >
          <ClearIcon />
        </button>
      </div>
    ));
    return (
      <div id="educationForm">
        <h3>Education</h3>
        {inputs}
        <button className="addNewField" onClick={this.addField}>
          ➕ Education
        </button>
      </div>
    );
  }
}

export default CvFormEducation;
