import Sidebar from "./app/Sidebar.jsx";
import Editor from "./app/Editor.jsx";
import Preview from "./app/Preview.jsx";
import "../styles/App.css";

function App() {

  return (
    
    <div className="app-layout">
      <Sidebar />
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
