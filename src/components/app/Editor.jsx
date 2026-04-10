import GeneralInfoForm from "../editor/GeneralInfoForm.jsx";
import ExperienceForm from "../editor/ExperienceForm.jsx";
import EducationForm from "../editor/EducationForm.jsx";
import "../../styles/app/Editor.css";

export default function Editor({resumeData, setResumeData}) {

    return (

        <main className="editor-container">
            <GeneralInfoForm resumeData={resumeData} setResumeData={setResumeData} />
            <EducationForm resumeData={resumeData} setResumeData={setResumeData} />
            <ExperienceForm resumeData={resumeData} setResumeData={setResumeData} />
        </main>
    );
}