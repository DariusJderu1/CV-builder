import { IoSchool } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import FormWrapper from "./FormWrapper";
import "../../styles/editor/Forms.css";
import { useState } from "react";

export default function EducationForm({resumeData, setResumeData}) {

    const [isExpanded, setIsExpanded] = useState(false);

    function handleExpand() {

        setIsExpanded(!isExpanded);
    }

    function handleSubmit(e) {

        e.preventDefault();

        const newResumeData = {
            ...resumeData,
            education: {
                school: e.target.elements["school"].value,
                degree: e.target.elements["degree"].value,
                startDate: e.target.elements["startDate"].value,
                endDate: e.target.elements["endDate"].value,
                location: e.target.elements["location"].value,
            }
        }

        setResumeData(newResumeData);
        setIsExpanded(false);
    }

    return (

        <FormWrapper icon={<IoSchool />} title="Education" isExpanded={isExpanded} handleExpand={handleExpand}>

            {isExpanded && (

                <form className="edit-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="school">School</label>
                        <input type="text" id="school" name="school" placeholder="School / University" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="degree">Degree</label>
                        <input type="text" id="degree" name="degree" placeholder="Degree / Field of study" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="start-date">Start Date</label>
                        <input type="text" id="start-date" name="startDate" placeholder="Start Date" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="end-date">End Date</label>
                        <input type="text" id="end-date" name="endDate" placeholder="End Date" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" name="location" placeholder="Location" required />
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
