import { IoChevronUp } from "react-icons/io5";

export default function FormWrapper({children, icon, title}) {

    return (

        <section>

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