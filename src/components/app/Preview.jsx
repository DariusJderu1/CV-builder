import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";
import "../../styles/app/Preview.css";

export default function Preview() {

    return (

        <section className="preview-shell">
            
            <div className="preview-page">
                
                <header className="preview-header">
                    <h1>Josephine Meyers</h1>
                    <div className="preview-contact-row">
                        <span><IoMail /> josephine.meyers@mail.co.uk</span>
                        <span><IoCall /> +44 3245 5521 5521</span>
                        <span><IoLocationSharp /> London, UK</span>
                    </div>
                </header>

                <section className="preview-section">
                    <h2>Education</h2>
                    
                    <div className="preview-entry">
                        <div className="preview-entry-meta">
                            <span>08/2020 - present</span>
                            <span>New York City, US</span>
                        </div>
                        
                        <div className="preview-entry-content">
                            <h3>London City University</h3>
                            <p>Bachelors in Economics</p>
                        </div>
                    </div>
                </section>

                <section className="preview-section">
                    <h2>Professional Experience</h2>
                    
                    <div className="preview-entry">
                        <div className="preview-entry-meta">
                            <span>08/2020 - present</span>
                            <span>New York City, US</span>
                        </div>

                        <div className="preview-entry-content">
                            <h3>Umbrella Inc.</h3>
                            <p>UX & UI Designer</p>
                            <p>
                                Designed and prototyped user interface patterns for various 
                                clients in various industries, ranging from self-service apps 
                                within the telecommunications-sector to mobile games for IOS and Android
                            </p>
                        </div>
                    </div>

                    <div className="preview-entry">
                        <div className="preview-entry-meta">
                            <span>08/2020 - present</span>
                            <span>New York City, US</span>
                        </div>

                        <div className="preview-entry-content">
                            <h3>Umbrella Inc.</h3>
                            <p>UX & UI Designer</p>
                            <p>
                                Designed and prototyped user interface patterns for various 
                                clients in various industries, ranging from self-service apps 
                                within the telecommunications-sector to mobile games for IOS and Android
                            </p>
                        </div>
                    </div>
                </section>

            </div>

        </section>
    );
}