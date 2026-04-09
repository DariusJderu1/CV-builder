import { IoChevronUp } from "react-icons/io5";
import "../../styles/editor/FormWrapper.css";

export default function FormWrapper({children, icon, title}) {

    return (

        <section className="form-section-container">

            <header className="form-header">
                <div className="form-title-group">
                    {icon}
                    <h2>{title}</h2>
                </div>

                <IoChevronUp className="form-expand-icon"/>
            </header>

            <div>
                {children}
            </div>

        </section>
    );
}