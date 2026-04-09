import { GiSuitcase } from "react-icons/gi";
import FormWrapper from "./FormWrapper";
import { CiEdit } from "react-icons/ci";

export default function ExperienceForm() {

    return (

        <FormWrapper icon={<GiSuitcase />} title="Experience">
        
            <form>
                <div>
                    <label htmlFor="job-title">Job Title</label>
                    <input type="text" id="job-title" placeholder="Enter Job Title" required />
                </div>

                <div>
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" placeholder="Enter Company Name" required />
                </div>

                <div>
                    <label htmlFor="start-date">Start Date</label>
                    <input type="text" id="start-date" required />
                </div>

                <div>
                    <label htmlFor="end-date">End Date</label>
                    <input type="text" id="end-date" required />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea 
                        id="description" 
                        placeholder="Describe your responsibilities and achievements..." 
                        rows="4" 
                        required 
                    />
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