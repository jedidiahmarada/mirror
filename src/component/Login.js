import React, { useState } from "react";
import "../assets/Login.css";

const Login = () => {
  const [inputPass, setInputPass] = useState("");
  const [inputUser, setInputUser] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="login-container">
        <div className="imageRR">
          <img
            src="https://bn1305files.storage.live.com/y4mpq00b-seOLNP3Qkl1faavTqxv24YOUSuVwXGqcopig1KrwVOFZax3Cad8ViUMlFGy9OJvhe6j0Qq0CvuLDTSArs33h14BeAfob3oj4m_Px5nuxuMYBeum_eH1gxz_xKmAtXCc3UTxCA-6gie_nBXIRqNAYKqtNL-NmBKpje187jdRcSLMQzWJTkdKB-JYybgDk8D7sH-o9SeJ7w-LAs-Cw/logo%20mirror%20R%D0%AF.psd?psid=1&width=1600&height=2048"
            alt="logo"
            className="RR"
          />
        </div>

        <h1>share your reflection</h1>

        <form onSubmit={handleLogin}>
          <input
            placeholder="Username or Email"
            value={inputUser}
            onChange={(event) => setInputUser(event.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            value={inputPass}
            onChange={(event) => setInputPass(event.target.value)}
          />

          <button className="login-button" type="submit">
            Sign In
          </button>
        </form>
      </div>
      <div className="bot-cont">
        <p>
          Don't have an account? <span>Sign up</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
