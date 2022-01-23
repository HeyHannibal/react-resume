import React, { Component } from 'react'

class DefaultCV extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personalInfo: {
                fullName: "John Doe",
                title: "Full Stack Developer",
                tel: "+1 942 9531393",
                email: "johndoe@email.com",
                location: 'Springfield',
                aboutMe: `Experienced Web Developer adept in all stages of advanced 
                     web development. Knowledgeable in user interface, testing, and 
                debugging processes. Equipped with a diverse and promising 
                skill-set. Able to effectively self-manage during independent 
                projects, as well as collaborate in a team setting.`,
                photo:'./src/assets/avatar.png'
              },
              workExp: [
                {
                  company: 'Gryzzl',
                  position: 'Front-end developer',
                  id: 'kzygf34',
                  dateFrom: '2017-06',
                  dateTo: '2018-12',
                  description:`Effetively multitasked and worked well with internal and external teams.
                  Helped to achieve a consistent look and visual theme across the website by promoting uniform fonts, formatting, images, and layout.
                  Brought forth vast experience designing and developing responsive design websites.`,
                },
              ],
              education: [
                {
                  degree: 'Bachelor of Computer Science',
                  school: 'University 1',
                  id: 'fghfg12',
                  dateFrom: '2015-01',
                  dateTo: '2019-04',
                  description: 'Gfpo opogpnbo dfpgp tfhdfph wpejvpwerj  sgkg okg[r wk',
                }
              ],
              skills: [
                {
                skill:'React',
                id:'id45',
                },
                {
                  skill:'JavaScript',
                  id:'id46',
                  },
                  {
                    skill:'Node.js',
                    id:'id47',
                    },
              ],
        }
        this.load = this.load.bind(this)
    }

    load() {
        let state = Object.assign({}, this.state)
        this.props.loadCV(state)
    }

    render() {
        return(
            <button onClick={this.load}>Load Default CV</button>
        )
    }

}

export default DefaultCV