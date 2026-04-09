import { IoChevronUp } from "react-icons/io5";
import "../../styles/editor/FormWrapper.css";

export default function FormWrapper({children, icon, title}) {

    return (

        <section className="form-section-container">

            <div>
                <div>
                    {icon}
                    <h2>{title}</h2>
                </div>

                <IoChevronUp />
            </div>

            <div>
                {children}
            </div>

        </section>
    );
}