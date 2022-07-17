import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudyServiceDetailsPage() {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [feedComment, setFeedComment] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const post = (e) => {
    const copyFeedComments = [...feedComment];
    copyFeedComments.push(comment);
    setFeedComment(copyFeedComments);
    setComment("");
  };

  const onRemove = (e) => {};

  const CommentList = (props) => {
    return (
      <div
        className="userCommentBox"
        style={{ borderBottom: "1px solid gray", width: "95%" }}
      >
        <div className="userInfo">
          <div className="userName">{props.userName}</div>
          <div className="userComment">{props.userComment}</div>
        </div>
        <div className="removeComment">
          <img
            src={process.env.PUBLIC_URL + `assets/delete.png`}
            onClick={onRemove}
            style={{ width: "20px", height: "20px", padding: 8 }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="StudyServiceDetailsPage">
      <div className="StudyDetailsControl">
        <div className="leftControl">
          <button onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
        <div className="rightControl">구인 프로그래밍</div>
      </div>

      <div className={["StudyTitleImgBox"].join(" ")}>
        <input className="StudyTitleImg" placeholder="타이틀 제목" disabled />
      </div>
      <input className="StudyTitleTextInput" placeholder="제목" disabled />
      <div className="StudyTitleContentText">
        <textarea placeholder="내용" disabled />
      </div>

      <div className="commentWrapper">
        <input
          type="text"
          className="inputComment"
          placeholder="댓글을 입력하세요"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          onKeyUp={(e) => {
            e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
          }}
          value={comment}
        />

        <img
          className={
            comment.length > 0 ? "submitCommentActive" : "submitCommentInactive"
          }
          src={process.env.PUBLIC_URL + `assets/send.png`}
          onClick={post}
          disabled={isValid ? false : true}
          style={{
            width: "40px",
            height: "40px",
            marginLeft: "20px",
            verticalAlign: "middle",
          }}
        />
      </div>

      {feedComment.map((commentArr, i) => {
        return (
          <CommentList userName="김하정" userComment={commentArr} key={i} />
        );
      })}
    </div>
  );
}

export default StudyServiceDetailsPage;
