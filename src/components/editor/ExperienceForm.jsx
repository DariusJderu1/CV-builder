import { GiSuitcase } from "react-icons/gi";
import FormWrapper from "./FormWrapper";
import { CiEdit } from "react-icons/ci";
import "../../styles/editor/Forms.css";
import { useState } from "react";

export default function ExperienceForm({resumeData, setResumeData}) {

    const [isExpanded, setIsExpanded] = useState(false);
    const [inputData, setInputData] = useState(resumeData.experience);

    function handleExpand() {

        setIsExpanded(!isExpanded);
    }

    function handleSubmit(e) {
        
        e.preventDefault();

        const newResumeData = {
            ...resumeData,
            experience: {
                jobTitle: e.target.elements["jobTitle"].value,
                company: e.target.elements["company"].value,
                startDate: e.target.elements["startDate"].value,
                endDate: e.target.elements["endDate"].value,
                description: e.target.elements["description"].value,
            }
        }

        setResumeData(newResumeData);
        setIsExpanded(false);
    }

    function handleInputChange(e) {

        // jobTitle: "",
        // company: "",
        // startDate: "",
        // endDate: "",
        // description: "",

        let newInputData;
        switch(e.target.name) {

            case "jobTitle":
                newInputData = { ...inputData, jobTitle: e.target.value}
                setInputData(newInputData);
                break;

            case "company":
                newInputData = { ...inputData, company: e.target.value};
                setInputData(newInputData);
                break;      

            case "startDate":
                newInputData = { ...inputData, startDate: e.target.value};
                setInputData(newInputData);
                break;

            case "endDate":
                newInputData = { ...inputData, endDate: e.target.value};
                setInputData(newInputData);
                break;

            case "description":
                newInputData = { ...inputData, description: e.target.value};
                setInputData(newInputData);
                break;
        }
    }

    return (

        <FormWrapper icon={<GiSuitcase />} title="Experience" isExpanded={isExpanded} handleExpand={handleExpand}>

            {isExpanded && (
                
                <form className="edit-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="job-title">Job Title</label>
                        <input type="text" id="job-title" name="jobTitle" placeholder="Enter Job Title" required 
                        value={inputData.jobTitle} onChange={handleInputChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" name="company" placeholder="Enter Company Name" required 
                        value={inputData.company} onChange={handleInputChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="start-date">Start Date</label>
                        <input type="text" id="start-date" name="startDate" placeholder="Start Date" required 
                        value={inputData.startDate} onChange={handleInputChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="end-date">End Date</label>
                        <input type="text" id="end-date" name="endDate" placeholder="End Date" required 
                        value={inputData.endDate} onChange={handleInputChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Describe your responsibilities and achievements..."
                            rows="4"
                            required
                            value={inputData.description} onChange={handleInputChange}
                        />
                    </div>

                    <button className="save-btn" type="submit">Save</button>
                </form>
            )}

            {!isExpanded && (
                <div className="summary-view">
                    <button className="edit-btn" onClick={handleExpand}>
                        <CiEdit className="edit-icon" /> Edit
                    </button>
                </div>
            )}

        </FormWrapper>
    );
}
