import React, { Component } from 'react'
import uniqid from 'uniqid'

class CvSkills extends Component {
    constructor(props) {
        super(props)
        this.sendObjToParent = this.sendObjToParent.bind(this)
        this.addSkill = this.addSkill.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            currentInput: '',
        }
    }

    sendObjToParent(skill) {
        this.props.onChange("skills", skill);
    }

    addSkill(e) {
        let newSkill = {
            skill: this.state.currentInput,
            id: uniqid(),
        }
        this.setState({ currentInput: '' })
        e.preventDefault()
        this.sendObjToParent(newSkill)
    }

    handleChange(event) {
        const value = event.target.value
        this.setState({
            currentInput: value,
        })
    }

    render() {
        return (
            <div id='skillsForm'>
                <form onSubmit={this.addSkill}>
                    <input type='text' value={this.state.currentInput} onChange={this.handleChange}></input>
                    <button type='submit'>Add Skill</button>
                    <h1></h1>
                </form>
            </div>
        )
    }

}

export default CvSkills