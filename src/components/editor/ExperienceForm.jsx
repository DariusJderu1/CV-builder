import { GiSuitcase } from "react-icons/gi";
import FormWrapper from "./FormWrapper";
import { CiEdit } from "react-icons/ci";
import "../../styles/editor/Forms.css";
import { useState } from "react";

export default function ExperienceForm() {

    const [isExpanded, setIsExpanded] = useState(false);

    function handleExpand() {

        setIsExpanded(!isExpanded);
    }

    return (

        <FormWrapper icon={<GiSuitcase />} title="Experience" isExpanded={isExpanded} handleExpand={handleExpand}>

            {isExpanded && (
                
                <form className="edit-form">
                    <div className="input-group">
                        <label htmlFor="job-title">Job Title</label>
                        <input type="text" id="job-title" placeholder="Enter Job Title" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" placeholder="Enter Company Name" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="start-date">Start Date</label>
                        <input type="text" id="start-date" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="end-date">End Date</label>
                        <input type="text" id="end-date" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            placeholder="Describe your responsibilities and achievements..."
                            rows="4"
                            required
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
