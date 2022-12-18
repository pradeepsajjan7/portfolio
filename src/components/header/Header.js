import react from "react";
import Navbar from "./navbar/Navbar"

const Header = () => {
    return(
        <div className="header" style={{}}>
            <h1 style={{display:"inline-block",cursor:"pointer"}}><i className="fas fa-user-alt" style={{fontSize:"30px",padding:"0px 8px"}} aria-hidden="true"></i>Pradeep</h1>
            <Navbar />
        </div>
    )
}

export default Header;