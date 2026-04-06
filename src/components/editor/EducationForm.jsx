import { IoSchool, IoChevronUp } from "react-icons/io5";

export default function EducationForm() {

    return (

        <section>

            <div>

                <div>
                    <IoSchool />
                    <h2>Education</h2>
                </div>

                <IoChevronUp />
                
            </div>

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

        </section>
    );
}