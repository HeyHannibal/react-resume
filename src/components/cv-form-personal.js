import React, {Component} from 'react'
import DisplayImage from './cv-load-photo'


class CvFormPersonal extends Component {
    constructor(props) {
        super(props);  
        this.handleChange = this.handleChange.bind(this)
        this.onFormChange = this.onFormChange.bind(this);
        this.onImageChange = this.onImageChange.bind(this)
        this.state = {
              fullName: "",
              title: "",
              tel: "",
              email: "",
              aboutMe: "",
              photo: '',
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

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.setState({image: e.target.result});
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }


    render() {
        return (
            <div>
            <form autoComplete='off' id='PersonalInfo'  action="#" onChange={this.onFormChange}>
                <label>Full Name
                <input
                    name='fullName'
                    type="text"
                    value={this.state.fullName}
                    onChange={this.handleChange}
                    placeholder="Full Name">
                </input>
                </label>
                <label>Job Title
                <input
                    name='title'
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                    onClick={this.onClickBtn}
                    placeholder="Title">
                </input>
                </label>
                <label>Phone Number
                  <input
                    name='tel'
                    type='tel'
                    placeholder="+1 000 0000000"
                    onChange={this.handleChange}
                >
                </input>   
                </label>
               <label>Email
                   <input
                    name='email'
                    type='email'
                    onChange={this.handleChange}
                    placeholder="name@mail.com"
                >
                </input>
               </label>
                <textarea
                    name='aboutMe'
                    onChange={this.handleChange}
                ></textarea>
                
       
            
      
   
            </form>
            <h1></h1>
            <img id='target' src={this.state.img}></img>
            </div>
        );
    }
}

export default CvFormPersonal