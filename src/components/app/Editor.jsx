import GeneralInfoForm from "../editor/GeneralInfoForm.jsx";
import ExperienceForm from "../editor/ExperienceForm.jsx";
import EducationForm from "../editor/EducationForm.jsx";
import "../../styles/app/Editor.css";

export default function Editor() {

    return (

        <main className="main-container">
            <GeneralInfoForm />
            <EducationForm />
            <ExperienceForm />
        </main>
    );
}