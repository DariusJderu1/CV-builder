import { IoSchool } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import FormWrapper from "./FormWrapper";

export default function EducationForm() {

    return (

        <FormWrapper icon={<IoSchool />} title="Education">

            <form>
                <div>
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" placeholder="School / University" required />
                </div>
                <div>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" placeholder="Degree / Field of study" required/>
                </div>

                <div>
                    <label htmlFor="start-date">Start Date</label>
                    <input type="text" id="start-date" placeholder="Start Date" required/>
                </div>

                <div>
                    <label htmlFor="end-date">End Date</label>
                    <input type="text" id="end-date" placeholder="End Date" required/>
                </div>

                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" placeholder="Location" required/>
                </div>

                <button type="submit">Save</button>
            </form>

            <div>
                <button>
                    <CiEdit /> Edit
                </button>
            </div>

        </FormWrapper>
    );
}