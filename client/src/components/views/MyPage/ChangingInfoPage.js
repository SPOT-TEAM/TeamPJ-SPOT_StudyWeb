import React, { useState } from "react";

function ChangingInfoPage() {
  const [Name, setName] = useState("");
  const [University, setUniversity] = useState("");

  const onUniversity = (event) => {
    setUniversity(event.currentTarget.value);
  };

  const OnNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  // const onSubmitHandler = (event) => {
  //   event.preventDefault();

  //   let body = {
  //     email: Email,
  //     password: Password,
  //     name: Name,
  //     loginId: LoginId,
  //     university: University
  //   };

  // };

  return (
    <div className="ChangingInfoPage">
      <h4 className="changinginfo-head">정보수정</h4>
      <div className="RegisterPageWrapper">
        <img
          className="signUpLogo"
          src={process.env.PUBLIC_URL + `/assets/signup.png`}
        />
        <div className="signUpTitle">Create account</div>
        {/* <form className="RegisterForm" onSubmit={onSubmitHandler}> */}
        <form className="RegisterForm">
          <input
            type="text"
            value={Name}
            onChange={OnNameHandler}
            placeholder="Name"
          />
          <input type="text" placeholder="Impossible to change" disabled />
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
          <input type="email" placeholder="Impossible to change" disabled />
          <input disabled type="password" placeholder="Impossible to change" />

          <div className="change-button">
            <button type="submit" style={{marginRight:'50px'}}>수정</button>
            <button type="submit">회원탈퇴</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangingInfoPage;