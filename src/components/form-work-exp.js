import React, { Component } from 'react'
import uniqid from "uniqid";
import ClearIcon from '@mui/icons-material/Clear';

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
                    descriptionUl: [

                    ]

                }
            ],
            default:[
                    {
                      company: 'CompanyName',
                      position: 'Front-end developer',
                      id: 'kzygf34',
                      dateFrom: '2017-06',
                      dateTo: '2018-12',
                      description: `Effetively multitasked and worked well with internal and external teams.
                              Helped to achieve a consistent look and visual theme across the website by promoting uniform fonts, formatting, images, and layout.
                              Brought forth vast experience designing and developing responsive design websites.`,
                    }
            ]
        }
    this.onClickAddField = this.onClickAddField.bind(this)
    this.updateOnChange = this.updateOnChange.bind(this)
    this.findInState = this.findInState.bind(this)
    this.onFormChange = this.onFormChange.bind(this)
    this.deleteField = this.deleteField.bind(this)
    }

    componentDidUpdate() {
        if (this.props.useDefault) {
          this.setState((state) => {
            return {workExp : state.default }
          });
            this.props.updateParent('workExp',this.state.default);
        }
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

    updateOnChange(event, customValue) {
        let propName = event.target.name
        let workArr = [...this.state.workExp]
        let ObjToUpdate = this.findInState(event.target.id)
        workArr[ObjToUpdate][propName] = (customValue) ? customValue : event.target.value;
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
            <div className='experienceFormDiv' key={item.id}>
            <form  className='workExperienceForm'  action="#" onSubmit={this.onFormChange} onChange={this.onFormChange}>
            <label>
                Position
                <input
                    name='position'
                    value={activeField(item.id).position}
                    onChange={this.updateOnChange}
                    id={item.id}
                    placeholder='Position'
                    type='text'
                    key={item.id+'posInput'}>
                </input>
            </label>
            
            <label htmlFor="company">
                Company
                <input
                    name='company'
                    value={activeField(item.id).company}
                    onChange={this.updateOnChange}
                    id={item.id}
                    placeholder='Company'
                    type='text'
                    key={item.id+'compInput'}>
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
                    key={item.id+'dateFromInput'}>
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
                    placeholder='Company'
                    type='month'
                    key={item.id+'dateToInput'}>
                </input>
            </label>
            <label className='textareaLabel'>

           
            <textarea
                name='description'    
                value={activeField(item.id).description}
                rows='5'
                cols='40'
                onChange={this.updateOnChange}
                id={item.id}
                className='textareaCV'
                placeholder=''
                key={item.id+'descInput'}>
            
            </textarea>
            </label>
            
            </form>
            <button
                onClick={this.deleteField} 
                className='deleteForm'
                key={item.id+'del'}
                id={item.id}
                >
                    <ClearIcon />
            </button>
            </div>
        ))
        return (
            <div id='workExpFrom'>
                        <h3>Work Experience</h3>

                {inputs}      
                <button 
                    className='addNewField'
                    onClick={this.onClickAddField}
                >➕ Work Experience
                </button>
            </div>
        )
    }
}

export default CvFormWorkExp