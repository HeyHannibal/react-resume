import React, { Component } from 'react'
import uniqid from 'uniqid'
import ClearIcon from '@mui/icons-material/Clear';

class CvSkills extends Component {
    constructor(props) {
        super(props)
        this.sendArrToParent = this.sendArrToParent.bind(this)
        this.addSkill = this.addSkill.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.deleteSkill = this.deleteSkill.bind(this)
        this.state = {
            currentInput: '',
            skills: [

            ]
        }
    }
    // componentDidUpdate() {
    //     setTimeout( () => {if(this.props.default) {
    //         this.setState({skills:this.props.default})
    //        }}, 500)
    // }
    sendArrToParent() {
        this.props.onChange("skills", this.state.skills);
    }

    addSkill(e) {
        let newState = Object.assign({}, this.state)
        let newSkill = {
            skill: this.state.currentInput,
            id: uniqid(),
        }
        newState.skills.push(newSkill)
        newState.currentInput = ''
        e.preventDefault()
        this.setState(newState)
        this.sendArrToParent(newSkill)
    }

    handleChange(event) {
        const value = event.target.value
        this.setState({
            currentInput: value,
        })
    }

    deleteSkill(event) {
        let newSkills = [...this.state.skills]
        let index = newSkills.findIndex((item) =>
            ((item.id).toString() === event.target.id.toString()))
        newSkills.splice(index, 1)
        this.setState({skills: newSkills})
    }


    render() {

        const skills = this.state.skills.map((item) => 
        <li key={item.id} className='skillListItem'>        
            {item.skill} 
    
           
             <ClearIcon id={item.id} 
            onClick={this.deleteSkill} />   
            
        </li>
        )

        return (
            <div id='skillsForm'>
                <h3>Skills</h3>
                <form onSubmit={this.addSkill} id='skillsForm'>
                    <input type='text' id='skillsFormInput' value={this.state.currentInput} onChange={this.handleChange}></input>
                    <button  className='addNewField' type='submit'>➕ Add Skill</button>
                </form>
                <ul id='skillList'>{skills}</ul>
            </div>
        )
    }

}

export default CvSkills