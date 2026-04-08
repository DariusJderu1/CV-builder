import Sidebar from "./app/Sidebar.jsx";
import Editor from "./app/Editor.jsx";
import Preview from "./app/Preview.jsx";
import "../styles/App.css";

function App() {

  return (
    
    <div className="app-layout">
      <div className="sidebar-container"><Sidebar /></div>
      <div className="editor-container"><Editor /></div>
      <div className="preview-container"><Preview /></div>
    </div>
  );
}

export default App;
