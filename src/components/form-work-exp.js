import React, { Component, useState, useEffect } from "react";
import uniqid from "uniqid";
import ClearIcon from "@mui/icons-material/Clear";

let CvFormWorkExp = (props) => {

    const [workExp, setWorkExp] = useState([{
        company: "",
        position: "",
        id: uniqid(),
        dateFrom: "",
        dateTo: "",
        description: "",
    },])

    const createWorkExp = () => ({
        company: "",
        position: "",
        id: uniqid(),
        dateFrom: "",
        dateTo: "",
        description: "",
    })

    useEffect(() => {
        if(props.useDefault) setWorkExp(props.default)
    })

    function handleChange(e) {
        let objToUpdate = findInState(e.currentTarget.id);
        let newWorkExp = workExp
        newWorkExp[objToUpdate][e.currentTarget.name] = e.currentTarget.value
        setWorkExp(newWorkExp);
    }

    let findInState = (id) => {

        return workExp.findIndex((item) => item.id.toString() === id.toString())
    }


    function updateParent(e) {
        e.preventDefault();
        props.onChange("workExp", workExp);
    }

    function addField() {
        let newWork = createWorkExp();
        setWorkExp((prevState) => [...prevState, newWork]);
    }

    function deleteField(e) {
        let index = findInState(e.currentTarget.id);
        let newWorkArr = Object.assign([], workExp)
        newWorkArr.splice(index, 1);
        setWorkExp(newWorkArr)
        props.onChange("workExp", newWorkArr);
    }


    let currentDate = () => new Date().toISOString().split("T")[0];
    let activeField = (id) => workExp[findInState(id)];

    const inputs = workExp.map((item) => (
        <div className="experienceFormDiv" key={item.id+'key'}>
            <form
                className="workExperienceForm"
                action="#"
                onChange={updateParent}
            >
                <label>
                    Position
                    <input
                        name="position"
                        value={activeField(item.id).position}
                        onChange={handleChange}
                        id={item.id}
                        placeholder="Position"
                        type="text"

                        key={item.id + "posInput"}
                    ></input>
                </label>

                <label htmlFor="company">
                    Company
                    <input
                        name="company"
                        value={activeField(item.id).company}
                        onChange={handleChange}
                        id={item.id}
                        placeholder="Company"
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
                        placeholder="Company"
                        type="month"
                        key={item.id + "dateToInput"}
                    ></input>
                </label>

                <label className="textareaLabel">
                    <textarea
                        name="description"
                        value={activeField(item.id).description}
                        rows="5"
                        cols="40"
                        onChange={handleChange}
                        id={item.id}
                        className="textareaCV"
                        placeholder=""
                        key={item.id + "descInput"}
                    ></textarea>
                </label>
            </form>

            <button
                onClick={deleteField}
                className="deleteForm"
                key={item.id + "del"}
              id={item.id}
            >
                <ClearIcon  />
            </button>

        </div>
    ));
    return (
        <div id="workExpFrom">
            <h3>Work Experience</h3>
            {inputs}
            <button className="addNewField" onClick={addField}>
                ➕ Work Experience
            </button>
        </div>
    );
}


export default CvFormWorkExp;
