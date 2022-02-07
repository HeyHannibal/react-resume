import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import ClearIcon from "@mui/icons-material/Clear";

let CvFormEducation = (props) => {
  
          const  createEducation = () => ({
                degree: "",
                school: "",
                id: uniqid(),
                dateFrom: "",
                dateTo: "",
                description: "",
            })
    const [education, setEducation] = useState([
                {
                    degree: "",
                    school: "",
                    id: uniqid(),
                    dateFrom: "",
                    dateTo: "",
                    description: "",
                },
            ],
    )

    useEffect(() => {
        if(props.useDefault) setEducation(props.default)
    })


    function handleChange(e) {
        let objToUpdate = findInState(e.currentTarget.id);
        let educationExp = education
        educationExp[objToUpdate][e.currentTarget.name] = e.currentTarget.value
        setEducation(educationExp);
    }

    let findInState = (id) => {
        return education.findIndex((item) => item.id.toString() === id.toString())
    }


    function updateParent(e) {
        e.preventDefault();
        props.onChange("education", education);
    }

    function addField() {
        let education = createEducation();
        setEducation((prevState) => [...prevState, education]);
    }

    function deleteField(e) {
        let index = findInState(e.currentTarget.id);
        let newEducation = Object.assign([], education)
        newEducation.splice(index, 1);
        setEducation(newEducation)
        props.onChange("education", newEducation);
    }

    
        const currentDate = () => new Date().toISOString().split("T")[0];
        const activeField = (id) => education[findInState(id)];

        const inputs = education.map((item) => (
            <div className="experienceFormDiv" key={item.id + "cont"}>
                <form
                    action="#"
                    className="experienceForm"
                    onChange={updateParent}
                >
                    <label htmlFor="school">
                        School
                        <input
                            name="school"
                            value={activeField(item.id).school}
                            onChange={handleChange}
                            id={item.id}
                            placeholder="School"
                            type="text"
                            key={item.id + "posInput"}
                        ></input>
                    </label>

                    <label htmlFor="degree">
                        Degree
                        <input
                            name="degree"
                            value={activeField(item.id).degree}
                            onChange={handleChange}
                            id={item.id}
                            placeholder="Degree"
                            type="text"
                            key={item.id + "compInput"}
                        ></input>
                    </label>

                    <label htmlFor="dateFrom">
                        Start Date
                        <input
                            name="dateFrom"
                            value={activeField(item.id).dateFrom}
                            max={
                                activeField(item.id).dateTo != ""
                                    ? activeField(item.id).dateTo
                                    : currentDate()
                            }
                            onChange={handleChange}
                            id={item.id}
                            type="month"
                            key={item.id + "dateFromInput"}
                        ></input>
                    </label>

                    <label htmlFor="dateTo">
                        End Date
                        <input
                            name="dateTo"
                            value={activeField(item.id).dateTo}
                            min={activeField(item.id).dateFrom}
                            max={currentDate()}
                            onChange={handleChange}
                            id={item.id}
                            placeholder="degree"
                            type="month"
                            key={item.id + "dateToInput"}
                        ></input>
                    </label>

                    <label htmlFor="description" className="textareaLabel">
                        Description
                        <textarea
                            name="description"
                            value={activeField(item.id).description}
                            rows="4"
                            cols="40"
                            onChange={handleChange}
                            id={item.id}
                            className="textareaCV"
                            placeholder=""
                            key={item.id + "DescInput"}
                        ></textarea>
                    </label>
                </form>
                <button
                    onClick={deleteField}
                    className="deleteForm"
                    key={item.id + "del"}
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
                <button className="addNewField" onClick={addField}>
                    ➕ Education
                </button>
            </div>
        );
    }


export default CvFormEducation;
