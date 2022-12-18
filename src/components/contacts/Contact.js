// import react from 'react'

import { useState } from "react";

const Contact = () => {
  const [newEmail, setNewEmail] = useState("");
  console.log("newEmail",newEmail);
  return (
    <div style={{ width: "90%" }}>
      <h1 style={{ textAlign: "center" }}>Let's Connect for further talk...</h1>
      <div style={{ width: "50%", display: "inline-block" }}>
        <img
          style={{ width: "80%", height: "8%" }}
          alt="RandomImage"
          src="https://media3.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif?cid=ecf05e477g2632g2h6pf4i9vlk8ovowpcnaafu4jto7erw09&rid=giphy.gif&ct=g"
        />
      </div>
      <div style={{ width: "50%", display: "inline-block" }}>
        <h1 style={{ textAlign: "center" }}>
          Interested to contact? Let's talk
        </h1>

        <div>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              width: "250px",
              height: "25px",
              padding: "15px",
              margin: "10px",
            }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            style={{
              width: "250px",
              height: "25px",
              padding: "15px",
              margin: "10px",
            }}
            required
          />
        </div>
        <div>
          <textarea
            rows="4"
            cols="64"
            placeholder="Message"
            style={{ padding: "15px", margin: "10px" }}
          ></textarea>
        </div>
        <div>
          <a href={`mailto:${newEmail}`}>
            <button
              style={{
                cursor: "pointer",
                width: "100px",
                height: "35px",
                paddding: "20px",
                border: "1px solid black",
                float: "right",
                backgroundColor: "grey",
                color: "#fff",
              }}
            >
              Submit
            </button>
          </a>
        </div>
      </div>
      <div
        style={{
          display: "inline-block",
          backgroundColor: "grey",
          color: "#fff",
          width: "440px",
          height: "180px",
          padding: "10px",
        }}
      >
        <h3>Here is my contact info...,</h3>
        <p style={{ fontSize: "20px" }}>Mob : 9916673568</p>
        <p style={{ fontSize: "20px" }}>email : pradeepsajjan37@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
