import { IoSchool } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import FormWrapper from "./FormWrapper";
import "../../styles/editor/Forms.css";

export default function EducationForm() {

    return (

        <FormWrapper icon={<IoSchool />} title="Education">

            <form className="edit-form">
                <div className="input-group">
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" placeholder="School / University" required />
                </div>
                <div className="input-group">
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" placeholder="Degree / Field of study" required/>
                </div>

                <div className="input-group">
                    <label htmlFor="start-date">Start Date</label>
                    <input type="text" id="start-date" placeholder="Start Date" required/>
                </div>

                <div className="input-group">
                    <label htmlFor="end-date">End Date</label>
                    <input type="text" id="end-date" placeholder="End Date" required/>
                </div>

                <div className="input-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" placeholder="Location" required/>
                </div>

                <button className="save-btn" type="submit">Save</button>
            </form>

            <div className="summary-view">
                <button className="edit-btn">
                    <CiEdit className="edit-icon"/> Edit
                </button>
            </div>

        </FormWrapper>
    );
}