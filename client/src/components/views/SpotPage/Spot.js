import React from "react";

function Spot() {
  return (
    <div className="Spot">
      <div className="SpotWrapper">
        <img className="leftItem" src={process.env.PUBLIC_URL + `/assets/centerImg.png`} />
        <div className="rightItem">
          <h2>Email: chjo1245@gmail.com</h2>
          <h2>Email: gkwjd719@naver.com</h2>
          <h2>Email: eodnjs01477@gmail.com</h2>
          <h2>Email: rkdgns4566@naver.com</h2>
          <img src={process.env.PUBLIC_URL + `/assets/SPOTLogo.png`} />
        </div>
      </div>
    </div>
  );
}

export default Spot;
