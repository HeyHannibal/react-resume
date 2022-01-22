import React, { Component } from 'react'
import uniqid from "uniqid";
import ClearIcon from '@mui/icons-material/Clear';

class CvFormEducation extends Component {
    constructor(props) {
        super(props)
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
                }
            ],
        }
        this.onClickAddField = this.onClickAddField.bind(this)
        this.updateOnChange = this.updateOnChange.bind(this)
        this.findInState = this.findInState.bind(this)
        this.deleteField = this.deleteField.bind(this)
        this.onFormChange = this.onFormChange.bind(this);

    }
    onFormChange(e) {
        e.preventDefault()
        this.props.onChange("education", this.state.education);
    }

    findInState(id) {
        let eduForms = [...this.state.education]
        let ObjToUpdate = eduForms.findIndex((item) =>
            ((item.id).toString() === id.toString()))
        return ObjToUpdate
    }

    onClickAddField() {
        let eduForms = [...this.state.education]
        let newField = Object.assign({}, this.state.educationDefault)
        newField.id = uniqid()
        eduForms.push(newField)
        this.setState({ education: eduForms })
    }

    updateOnChange(event) {
        let propName = event.target.name
        let eduForms = [...this.state.education]
        let ObjToUpdate = this.findInState(event.target.id)
        eduForms[ObjToUpdate][propName] = event.target.value;

        this.setState({ education: eduForms })
    }

    deleteField(event) {
        let eduForms = [...this.state.education]
        let index = this.findInState(event.target.id)
        eduForms.splice(index, 1)
        this.setState({ education: eduForms })
        this.props.onChange("education", eduForms);

    }

    render() {
        const currentDate = () => (new Date()).toISOString().split('T')[0]
        const activeField = (id) => this.state.education[this.findInState(id)]

        const inputs = this.state.education.map((item) => (
            <div className='experienceFormDiv' key={item.id + 'cont'}>
                <form action="#" className='experienceForm' onChange={this.onFormChange}>

                    <label htmlFor="school">
                        School
                        <input
                            name='school'
                            value={activeField(item.id).school}
                            onChange={this.updateOnChange}
                            id={item.id}
                            placeholder='School'
                            type='text'
                            key={item.id + 'posInput'}>
                        </input>
                    </label>

                    <label htmlFor="degree">
                        Degree
                        <input
                            name='degree'
                            value={activeField(item.id).degree}
                            onChange={this.updateOnChange}
                            id={item.id}
                            placeholder='Degree'
                            type='text'
                            key={item.id + 'compInput'}>
                        </input>
                    </label>

                    <label htmlFor="dateFrom">
                        Start Date
                        <input
                            name='dateFrom'
                            value={activeField(item.id).dateFrom}
                            max={(activeField(item.id).dateTo != '') ?
                                activeField(item.id).dateTo : currentDate()}
                            onChange={this.updateOnChange}
                            id={item.id}
                            type='month'
                            key={item.id + 'dateFromInput'}>
                        </input>
                    </label>

                    <label htmlFor="dateTo">
                        End Date
                        <input
                            name='dateTo'
                            value={activeField(item.id).dateTo}
                            min={activeField(item.id).dateFrom}
                            max={currentDate()}
                            onChange={this.updateOnChange}
                            id={item.id}
                            placeholder='degree'
                            type='month'
                            key={item.id + 'dateToInput'}>
                        </input>
                    </label>

                    <label htmlFor="description" className='textareaLabel'>
                        Description
                        <textarea 
                            name='description'
                            value={activeField(item.id).description}
                            rows='4'
                            cols='40'
                            onChange={this.updateOnChange}
                            id={item.id}
                            className='textareaCV'

                            placeholder=''
                            key={item.id + 'DescInput'}>
                        </textarea>
                    </label>



                </form>
                <button
                    onClick={this.deleteField}
                    className='deleteForm'
                    key={item.id + 'del'}
                    id={item.id}
                >
                    < ClearIcon />
                </button>
            </div>
        ))
        return (
            <div id='educationForm'>
                <h3>Education</h3>
                {inputs}
                <button
                    className='addNewField'
                    onClick={this.onClickAddField}
                > ➕ Education
                </button>
            </div>
        )
    }
}

export default CvFormEducation;