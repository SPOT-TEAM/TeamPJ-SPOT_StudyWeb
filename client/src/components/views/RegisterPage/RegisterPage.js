import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../_actions/user_action";
import Footer from "../_Footer/Footer";
import NavBar from "../_NavBar/NavBar";
import _auth from "./../../../hoc/auth";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [LoginId, setLoginId] = useState("");
  const [University, setUniversity] = useState("");

  const onLoginIdHandler = (event) => {
    setLoginId(event.currentTarget.value);
  }
  const onUniversity = (event) => {
    setUniversity(event.currentTarget.value);
  }
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const OnNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const OnConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호를 확인해주세요");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
      loginId: LoginId,
      university: University
    };
    dispatch(registerUser(body)).then((response) => {
      console.log(response.payload);
      if (response.payload.success) {
        navigate("/login");
      } else {
        alert("err");
      }
    });
  };


  _auth(false);

  return (
    <div className="RegisterPage">
      <div className="RegisterPageWrapper">
        <img
          className="signUpLogo"
          src={process.env.PUBLIC_URL + `/assets/signup.png`}
        />
        <div className="signUpTitle">Create account</div>
        <form className="RegisterForm" onSubmit={onSubmitHandler}>
          <input type="text" value={Name} onChange={OnNameHandler} placeholder="Name" />
          <input type="text" value={LoginId} onChange={onLoginIdHandler} placeholder="Login Id" />
          <select value={University} onChange={onUniversity}>
            <option value="">University</option>
            <option value="순천향">순천향대학교</option>
            <option value="호서">호서대학교</option>
            <option value="선문">선문대학교</option>
            <option value="백석">백석대학교</option>
            <option value="유원">유원대학교</option>
            <option value="백석">백석대학교</option>
            <option value="단국">단국대학교</option>
            <option value="공주">공주대학교</option>
            <option value="상명">상명대학교</option>
            <option value="나사렛">나사렛대학교</option>
            <option value="한국과학기술">한국과학기술대학교</option>
            <option value="유원">유원대학교</option>
            <option value="국립경찰">국립경찰대학교</option>
          </select>
          <input type="email" value={Email} onChange={onEmailHandler} placeholder="e-mail"/>
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
            placeholder="password"
          />
          <input
            type="password"
            value={ConfirmPassword}
            onChange={OnConfirmPasswordHandler}
            placeholder="comfirm password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
