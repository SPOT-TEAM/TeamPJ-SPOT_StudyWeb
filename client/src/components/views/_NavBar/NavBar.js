import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";


function NavBar() {
  const navigate = useNavigate();

  const onClickLogolutHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        navigate("/login");
      } else {
        return alert("로그아웃 실패");
      }
    });
  };

  return (
    <header className="Navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src = {process.env.PUBLIC_URL + `/assets/SPOTLogo.png`} />
      </div>
      <ul className="index">
        <li onClick={() => navigate("/study")}>스터디 구인 구직</li>
        <li onClick={() => navigate("/message")}>쪽지함</li>
        <li onClick={() => navigate("/spot")}>고객센터</li>
        <li onClick={() => navigate("/mypage")}>마이페이지</li>
      </ul>
      <button className="userState" onClick={()=>navigate("/login")}>login/join</button>
      <button className="userState" onClick={onClickLogolutHandler}>logout</button>
    </header>
  );
}

export default NavBar;
