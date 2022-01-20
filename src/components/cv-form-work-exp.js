import React, { Component } from 'react'
import uniqid from "uniqid";


class CvFormWorkExp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workExpDefault: {
                    company:'',
                    position:'',
                    id:uniqid(),
                    dateFrom:'',
                    dateTo:'',
                    description:'',
            },
            workExp: [
                {
                    company:'',
                    position:'',
                    id:uniqid(),
                    dateFrom:'',
                    dateTo:'',
                    description:'',
                }
            ],
            
        }
    this.onClickAddField = this.onClickAddField.bind(this)
    this.updateOnChange = this.updateOnChange.bind(this)
    this.findInState = this.findInState.bind(this)
    this.onFormChange = this.onFormChange.bind(this)
    this.deleteField = this.deleteField.bind(this)
    }

    onFormChange(e) {
        e.preventDefault()
        this.props.onChange('workExp', this.state.workExp);
      }


    
    findInState(id) {
        let workArr = [...this.state.workExp]
        let ObjToUpdate = workArr.findIndex((item) => 
        ((item.id).toString() === id.toString()))
        return ObjToUpdate
    }
    
    onClickAddField() {
        let workArr = [...this.state.workExp]
        let newWork = Object.assign({}, this.state.workExpDefault)
        newWork.id = uniqid()
        workArr.push(newWork)
        this.setState({workExp: workArr})
    }

    updateOnChange(event) {
        let propName = event.target.name
        let workArr = [...this.state.workExp]
        let ObjToUpdate = this.findInState(event.target.id)
        workArr[ObjToUpdate][propName] = event.target.value;
        this.setState({workExp: workArr})
    }

    deleteField(event) {
        let workArr = [...this.state.workExp]
        let index = this.findInState(event.target.id)
        workArr.splice(index, 1)
        this.setState({workExp:workArr})
        this.props.onChange("workExp", workArr);

    }


    render() {
        let currentDate = () => (new Date()).toISOString().split('T')[0]
        let activeField = (id) => this.state.workExp[this.findInState(id)]
        
        const inputs = this.state.workExp.map((item) => (    
            <form key={item.id}  action="#" onSubmit={this.onFormChange} onChange={this.onFormChange}>
            Work Experience
            <input
                name='position'    
                value={activeField(item.id).position}
                onChange={this.updateOnChange}
                id={item.id}
                placeholder='Position' 
                type='text'
                key={item.id+'posInput'}>
            </input>
            
            <input
                name='company'    
                value={activeField(item.id).company}
                onChange={this.updateOnChange}
                id={item.id}
                placeholder='Company' 
                type='text'
                key={item.id+'compInput'}>
            </input>

            <input
                name='dateFrom'    
                value={activeField(item.id).dateFrom}
                max={(activeField(item.id).dateTo != '') ? 
                    activeField(item.id).dateTo : currentDate()} 
                onChange={this.updateOnChange}
                id={item.id}
                type='date'
                key={item.id+'dateFromInput'}>
            </input>

            <input
                name='dateTo'    
                value={activeField(item.id).dateTo}
                min={activeField(item.id).dateFrom} 
                max={currentDate()} 
                onChange={this.updateOnChange}
                id={item.id}
                placeholder='Company' 
                type='date'
                key={item.id+'dateToInput'}>
            </input>
 
            <textarea
                name='description'    
                value={activeField(item.id).description}
                rows='4'
                cols='40'
                onChange={this.updateOnChange}
                id={item.id}
                placeholder='' 
                key={item.id+'descInput'}>
            </textarea>

            <button
                onClick={this.deleteField} 
                className='delete' 
                key={item.id+'del'}
                id={item.id}
                >Delete
            </button>

            </form>
        ))
        return (
            <div id='workExpFrom'>
                {inputs}      
                <button 
                    onClick={this.onClickAddField}
                >Add
                </button>
            </div>
        )
    }
}

export default CvFormWorkExp