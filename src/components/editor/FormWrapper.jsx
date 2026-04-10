import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import "../../styles/editor/FormWrapper.css";
import { useState } from "react";

export default function FormWrapper({children, icon, title}) {

    const [isExpanded, setIsExpanded] = useState(false);

    function handleExpand() {

        setIsExpanded(!isExpanded);
    }

    return (

        <section className="form-section-container">

            <header className="form-header">
                <div className="form-title-group">
                    {icon}
                    <h2>{title}</h2>
                </div>

                <button onClick={handleExpand}>
                    {isExpanded ? <IoChevronUp /> : <IoChevronDown />}
                </button>
            </header>

            {isExpanded && (
                <div>{children}</div> 
            )}

        </section>
    );
}