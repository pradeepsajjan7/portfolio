import react from "react";
import Section from "./section/Section"
import Aside from "./aside/Aside"

const Main = () => {
    return(
        <div className="row main" style={{margin:"150px auto"}}>
            <Aside/>
            <Section/>
        </div>
    )
}

export default Main;