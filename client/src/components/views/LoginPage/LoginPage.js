import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../_actions/user_action";
import Footer from "../_Footer/Footer";
import NavBar from "../_NavBar/NavBar";
import _auth from "./../../../hoc/auth";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [LoginId, setLoginId] = useState("");
  const [Password, setPassword] = useState("");

  const onLoginIdHandler = (event) => {
    setLoginId(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  _auth(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      loginId: LoginId,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        navigate("/");
      } else {
        alert(response.payload.message);
      }
    });
  };

  return (
    <div className="LoginPage">
      <div className="loginWrapper">
        <img
          className="signInLogo"
          src={process.env.PUBLIC_URL + `/assets/signin.png`}
        />
        <h2 className="signInTitle">Welcome back!</h2>
        <form className="LoginForm" onSubmit={onSubmitHandler}>
          <input
            type="text"
            value={LoginId}
            onChange={onLoginIdHandler}
            placeholder="Login id"
          />
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
            placeholder="Password"
          />
          <br />
          <button type="submit">SIGN IN</button>
          <a className="signUp" onClick={() => navigate("/register")}>
            Don't have an account? Sign Up
          </a>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
