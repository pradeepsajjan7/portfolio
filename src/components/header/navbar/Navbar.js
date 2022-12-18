import react from "react";

const Navbar = () => {
    return(
        <>
        <div className="navbar" style={{margin:"0px 200px 0px 0px"}}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <h1 style={{cursor:"pointer"}}><i className="fas fa-moon"></i>mode</h1>
        </div>
        </>
    )
}

export default Navbar;


