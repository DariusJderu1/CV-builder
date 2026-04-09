import { IoPersonCircle } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import FormWrapper from "./FormWrapper";

export default function GeneralInfoForm() {

    return (

        <FormWrapper icon={<IoPersonCircle />} title="General Information">

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
            </form>


            <div>
                <button>
                     <CiEdit /> Edit
                </button>
            </div>

        </FormWrapper>
    );
}