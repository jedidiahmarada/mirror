import React, { useState } from "react";
import "../assets/Register.css";

const Register = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputFullName, setInputFullName] = useState("");
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");

  return (
    <div>
      <div className="register-container">
        <div className="imageRR">
          <img
            src="https://bn1305files.storage.live.com/y4mpq00b-seOLNP3Qkl1faavTqxv24YOUSuVwXGqcopig1KrwVOFZax3Cad8ViUMlFGy9OJvhe6j0Qq0CvuLDTSArs33h14BeAfob3oj4m_Px5nuxuMYBeum_eH1gxz_xKmAtXCc3UTxCA-6gie_nBXIRqNAYKqtNL-NmBKpje187jdRcSLMQzWJTkdKB-JYybgDk8D7sH-o9SeJ7w-LAs-Cw/logo%20mirror%20R%D0%AF.psd?psid=1&width=1600&height=2048"
            alt="logo"
            className="RR"
          />
        </div>

        <h1>share your reflection</h1>

        <form onSubmit>
          <input
            placeholder="Email"
            value={inputEmail}
            onChange={(event) => setInputEmail(event.target.value)}
          />

          <input
            placeholder="Full Name"
            value={inputFullName}
            onChange={(event) => setInputFullName(event.target.value)}
          />

          <input
            placeholder="Username"
            value={inputUser}
            onChange={(event) => setInputUser(event.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            value={inputPass}
            onChange={(event) => setInputPass(event.target.value)}
          />

          <button className="register-button" type="submit">
            Sign Up
          </button>
          <p>
            By signing up, you agree to our Terms, Data Policy and Cookies
            Policy
          </p>
        </form>
      </div>
      <div className="bot-cont">
        <p>
          Have an account? <span>Sign In</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
