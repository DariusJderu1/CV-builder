import Sidebar from "./app/Sidebar.jsx";
import Editor from "./app/Editor.jsx";
import Preview from "./app/Preview.jsx";
import "../styles/App.css";
import { useState } from "react";

function App() {

  const [resumeData, setResumeData] = useState({

      generalInformation: {
        fullName: "",
        email: "",
        address: "",
      }, 

      education: {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },

      experience: {
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      }
    }
  )

  return (
    
    <div className="app-layout">
      <Sidebar />
      <Editor resumeData={resumeData} setResumeData={setResumeData} />
      <Preview resumeData={resumeData}/>
    </div>
  );
}

export default App;
