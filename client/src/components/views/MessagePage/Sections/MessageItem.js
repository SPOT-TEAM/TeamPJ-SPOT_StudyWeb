import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MessageItem = ({
  id,
  anotherId,
  name,
  anotherName,
  newestContent,
  date,
}) => {
  const navigate = useNavigate();
  const [important, setImportant] = useState(false);
  const toggleImpotant = () => {
    setImportant((important) => !important);
  };

  return (
    <div className="MessageItem">
      <div className="MessageItem_userInfo_wrapper">
        <div className="userInfo_name">{name}</div>
        <img
          className="userDirection"
          src={process.env.PUBLIC_URL + `assets/message/direcion.png`}
        />
        <div className="userInfo_name">{anotherName}</div>
      </div>
      <div
        className="item_content_wrapper"
        onClick={() => {
          navigate("/messagedetail", { state: { id: id, anotherId: anotherId}});
        }}
      >
        <div className="item_newestContent">{newestContent.slice(0, 25)}</div>
        <img
          className="item_content_send"
          src={process.env.PUBLIC_URL + `assets/message/send.png`}
        />
      </div>
      <div className="item_info_wrapper">
        <div className="item_date">{date}</div>
        <img
          className="item_important"
          src={
            process.env.PUBLIC_URL +
            `assets/message/important${important ? "2" : "1"}.png`
          }
          onClick={() => toggleImpotant()}
        />
      </div>
    </div>
  );
};

export default MessageItem;
