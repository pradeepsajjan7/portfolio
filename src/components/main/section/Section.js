import react from "react";
import User from "../../../assets/images/user.svg"

const Section = () => {
    return(
        <div className="section" style={{}}>
            <img src={User} alt="User" style={{width:"400px",height:"400px"}}></img>
        </div>
    )
}

export default Section;