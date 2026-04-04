import { IoPersonCircle } from "react-icons/io5";

export default function GeneralInfoForm() {

    return (

        <section>

            <div>
                <IoPersonCircle />
                <h2>General Information</h2>
            </div>
            
            <form action="">

                <div>
                    <label htmlFor="full-name">Full name</label>
                    <input type="text" id="full-name" placeholder="Enter your full name" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Email" />
                </div>

                <div>
                    <label htmlFor="phone">Phone number</label>
                    <input type="tel" id="phone" placeholder="Phone" />
                </div>

                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" placeholder="City" />
                </div>

            </form>

        </section>
    );
}