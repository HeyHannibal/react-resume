import React, {Component} from 'react'

class CvFormPersonal extends Component {
    constructor(props) {
        super(props);  
        this.handleChange = this.handleChange.bind(this)
        this.onFormChange = this.onFormChange.bind(this);
        
        this.state = {
              fullName: "",
              title: "",
              tel: "",
              email: "",
              aboutMe: "",
            }   
          
    }

    onFormChange(e) {
        e.preventDefault()
        this.props.onChange(e, "personalInfo");
    }
    
    
    handleChange(event) {
        const value = event.target.value;
        const key = event.target.name;

        this.setState({
            [key]: value
        })
        
    }

  

    render() {
        return (
            <div>
            <form autoComplete='off' id='PersonalInfo'  action="#" onChange={this.onFormChange}>
                Personal details
                <input
                    name='fullName'
                    type="text"
                    value={this.state.fullName}
                    onChange={this.handleChange}
                    placeholder="Full Name">
                </input>
                <input
                    name='title'
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                    onClick={this.onClickBtn}
                    placeholder="Title">
                </input>
                <input
                    name='tel'
                    type='tel'
                    placeholder="+1 000 0000000"
                    onChange={this.handleChange}
                >
                </input>
                <input
                    name='email'
                    type='email'
                    onChange={this.handleChange}
                    placeholder="name@mail.com"
                >
                </input>
                <textarea
                    name='aboutMe'
                    onChange={this.handleChange}
                ></textarea>
                <button type='submit'>Submit</button>
            </form>
            <h1></h1>
            </div>
        );
    }
}

export default CvFormPersonal