import websiteLogo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

// to delete the inline style
function Sidebar() {

    return (

        <aside>

            <img style={{ width: "100px", height: "100px" }}
            src={websiteLogo} />

            <h1>CV Generator</h1>

            <p>DariusJderu1</p>

            <FaGithub />

        </aside>
    );
}

export default Sidebar;