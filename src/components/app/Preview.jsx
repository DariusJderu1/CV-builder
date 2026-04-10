import { IoMail, IoLocationSharp } from "react-icons/io5";
import "../../styles/app/Preview.css";

export default function Preview({resumeData}) {

    return (

        <section className="preview-shell">
            <div className="preview-page">
                <header className="preview-header">
                    <h1>{resumeData.generalInformation.fullName}</h1>
                    <div className="preview-contact-row">
                        <span><IoMail /> {resumeData.generalInformation.email}</span>
                        <span><IoLocationSharp /> {resumeData.generalInformation.address}</span>
                    </div>
                </header>

                <section className="preview-section">
                    <h2>Education</h2>
                    
                    <div className="preview-entry">
                        <div className="preview-entry-meta">
                            <span>{resumeData.education.startDate} - {resumeData.education.endDate}</span>
                            <span>{resumeData.education.location}</span>
                        </div>
                        
                        <div className="preview-entry-content">
                            <h3>{resumeData.education.school}</h3>
                            <p>{resumeData.education.degree}</p>
                        </div>
                    </div>
                </section>

                <section className="preview-section">
                    <h2>Professional Experience</h2>
                    
                    <div className="preview-entry">
                        <div className="preview-entry-meta">
                            <span>{resumeData.experience.startDate} - {resumeData.experience.endDate}</span>
                        </div>

                        <div className="preview-entry-content">
                            <h3>{resumeData.experience.company}</h3>
                            <p>{resumeData.experience.jobTitle}</p>
                            <p>{resumeData.experience.description}</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}