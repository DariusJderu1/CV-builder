import { IoMdPerson } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import FormWrapper from "./FormWrapper";
import "../../styles/editor/Forms.css";
import { useState } from "react";

export default function GeneralInfoForm({resumeData, setResumeData}) {

    const [isExpanded, setIsExpanded] = useState(false);

    function handleExpand() {

        setIsExpanded(!isExpanded);
    }
    
    function handleSubmit(e) {

        e.preventDefault();

        const newResumeData = {
            ...resumeData,
            generalInformation: {
                fullName: e.target.elements["fullName"].value,
                email: e.target.elements["email"].value,
                address: e.target.elements["address"].value,
            }
        }

        setResumeData(newResumeData);
        setIsExpanded(false);
    }

    return (

        <FormWrapper icon={<IoMdPerson />} title="General Information" isExpanded={isExpanded} handleExpand={handleExpand}>

            {isExpanded && (

                <form className="edit-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="full-name">Full name</label>
                        <input type="text" id="full-name" name="fullName" placeholder="First and last name" required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" placeholder="City, Country" />
                    </div>

                    <button className="save-btn" type="submit">Save</button>
                </form>
            )}


            {!isExpanded && (

                <div className="summary-view">
                    <button className="edit-btn" onClick={handleExpand}>
                        <CiEdit className="edit-icon"/> Edit
                    </button>
                </div>
            )}

        </FormWrapper>
    );
}
