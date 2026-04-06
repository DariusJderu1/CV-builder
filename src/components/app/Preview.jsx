import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";

export default function Preview() {

    return (

        <section>
            
            <div>
                
                <header>
                    <h1>Josephine Meyers</h1>
                    <div>
                        <span><IoMail /> josephine.meyers@mail.co.uk</span>
                        <span><IoCall /> +44 3245 5521 5521</span>
                        <span><IoLocationSharp /> London, UK</span>
                    </div>
                </header>

                <section>
                    <h2>Education</h2>
                    
                    <div>
                        <div>
                            <span>08/2020 - present</span>
                            <span>New York City, US</span>
                        </div>
                        <div>
                            <h3>London City University</h3>
                            <p>Bachelors in Economics</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Professional Experience</h2>
                    
                    <div>
                        <div>
                            <span>08/2020 - present</span>
                            <span>New York City, US</span>
                        </div>

                        <div>
                            <h3>Umbrella Inc.</h3>
                            <p>UX & UI Designer</p>
                            <p>
                                Designed and prototyped user interface patterns for various 
                                clients in various industries, ranging from self-service apps 
                                within the telecommunications-sector to mobile games for IOS and Android
                            </p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <span>08/2020 - present</span>
                            <span>New York City, US</span>
                        </div>

                        <div>
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