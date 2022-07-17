import React from "react";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const navigate = useNavigate();

  return (
    <div className="Mypage">
      <h4 className="mypage-head">마이페이지</h4>
      <h4 style={{ marginLeft: 20 }}>개인 정보</h4>
      <div className="mypage-info">
        <table>
          <tbody>
            <tr>
              <td rowSpan={3}>
                <img
                  src={process.env.PUBLIC_URL + `/assets/mypages.jpeg`}
                  style={{
                    marginLeft: 20,
                    marginRight: 50,
                    width: "100px",
                    height: "100px",
                  }}
                />
              </td>
              <td>이름:</td>
              <td>user.name</td>
            </tr>
            <tr>
              <td>대학교:</td>
              <td>user.university</td>
            </tr>
            <tr>
              <td>이메일:</td>
              <td>user.email</td>
              <td>
                <button
                  className="mypage-button"
                  style={{
                    marginLeft: "100px",
                    marginTop: 0,
                    width: "100px",
                    height: "20px",
                  }}
                  onClick={() => navigate("/ChangingInfoPage")}
                >
                  정보수정
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4 style={{ marginLeft: 20, marginTop: "50px" }}>나의 활동</h4>
      <div className="mypage-info">
        <ul>
          <li>
            <button className="mypage-button" style={{ textAlign: "left" }}>
              스크랩
            </button>
          </li>
          <li>
            <button className="mypage-button" style={{ textAlign: "left" }}>
              내가 쓴 글
            </button>
          </li>
          <li>
            <button className="mypage-button" style={{ textAlign: "left" }}>
              내가 쓴 댓글
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyPage;