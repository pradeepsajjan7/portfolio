import react from "react";
import TypeScript from "../../assets/svg/Typescript_logo_2020.svg.png";
import ReduxIcon from "../../assets/svg/redux-icon.svg";
import ReactHooks from "../../assets/images/reactHooks.png";

const Skills = () => {
  return (
    <div className="skills">
      <h1>My Technical Stack</h1>
      {/* <i class="fas fa-user"></i> <!-- uses solid style -->
        <i class="far fa-user"></i> <!-- uses regular style -->
        <i class="fab fa-github-square"></i> <!-- uses brands style --> */}
      <ul>
        <li>
          <i
            class="fab fa-html5 fa-3x"
            style={{ color: "#f16529" }}
            aria-hidden="true"
          ></i>
          HTML
        </li>
        <li>
          <i
            class="fab fa-css3-alt fa-3x"
            style={{ color: "#2965f1" }}
            aria-hidden="true"
          ></i>
          CSS
        </li>
        <li>
          <i
            class="fab fa-bootstrap fa-3x"
            style={{ color: "#602c50" }}
            aria-hidden="true"
          ></i>
          Bootstrap
        </li>
        <li>
          <i class="fab fa-js-square fa-3x" aria-hidden="true"></i>
          Javascript
        </li>
        <li>
          <i
            class="fa-brands fa-react fa-3x"
            style={{
              color: "#349bb7",
              backgroundColor: "#fff",
              borderRadius: "50%",
              padding: "2px",
            }}
            aria-hidden="true"
          ></i>
          React
        </li>
        <li>
          <img
            src={ReactHooks}
            alt="TS"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
          Hooks
        </li>
        <li>
          <img
            src={ReduxIcon}
            alt="TS"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
          Redux
        </li>
        <li>
          <img
            src={TypeScript}
            alt="TS"
            style={{ width: "50px", height: "50px" }}
          />
          TypeScript
        </li>
        <li>
          <i
            class="fa-brands fa-sass fa-3x"
            style={{
              color: "rgb(240 98 142 / 1)",
              backgroundColor: "#fff",
              borderRadius: "50%",
              padding: "8px",
            }}
            aria-hidden="true"
          ></i>
          SAAS
        </li>
      </ul>
    </div>
  );
};

export default Skills;
