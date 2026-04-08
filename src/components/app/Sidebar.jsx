import "../../styles/app/Sidebar.css";

import websiteLogo from "/src/assets/logo.png";
import { FaGithub } from "react-icons/fa";

function Sidebar() {

    return (

        <aside className="sidebar-container">

            <div>
                <img src={websiteLogo} />
                <h1>CV Generator</h1>
            </div>

            <div>
                <p>DariusJderu1</p>
                <FaGithub className="github-icon" />
            </div>

        </aside>
    );
}

export default Sidebar;