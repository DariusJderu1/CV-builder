import { IoPersonCircle, IoChevronUp } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

export default function GeneralInfoForm() {

    return (

        <section className="general-info-form-container">
            <div>

                <div>
                    <IoPersonCircle />
                    <h2>General Information</h2>
                </div>

                <IoChevronUp />
                
            </div>
            
            <form>
                <div>
                    <label htmlFor="full-name">Full name</label>
                    <input type="text" id="full-name" placeholder="First and last name" required/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Email" required />
                </div>

                <div>
                    <label htmlFor="phone">Phone number</label>
                    <input type="tel" id="phone" placeholder="Phone number" />
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="City, Country" />
                </div>

                <button type="submit">Save</button>
            </form>

            <div className="summary-view">
                <button type="button" className="edit-button">
                    <CiEdit /> Edit
                </button>
            </div>
        </section>
    );
}