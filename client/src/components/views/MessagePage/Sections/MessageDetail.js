import React from "react";
import { useLocation } from "react-router-dom";
import MessagePiece from "./MessagePiece";

function MessageDetail() {
  const location = useLocation();
  const id = location.state.id;
  const anotherId = location.state.anotherId;
  return (
    <div className="MessageDetail">
      <section className="MessageDetailLeftWrapper">
        <div className="MessageInfoArea">
          <img className="MessageIngoAreaLogo" src={process.env.PUBLIC_URL + `assets/message/message.png`} />
          <h2>from. {id}</h2>
          <img className="MessagefromTo" src={process.env.PUBLIC_URL + `assets/message/fromTo.png`} />
          <h2>to. {anotherId}</h2>
        </div>
        <div className="MessageControl">
          <button className="MessageControlAdd">멤버 추가</button>
          <button className="MessageControlDeclare">신고 하기</button>
          <button className="MessageControDelete">방 나가기</button>
        </div>
      </section>
      <section className="MessageDetailRightWrapper">
        <div className="MessageInputArea">
          <textarea className="MessageInput"></textarea>
          <button className="MessageSend"></button>
        </div>
        <div className="MessageContentArea">
          <div className="MessageContentWrapper">
            <MessagePiece id={id} anotherId={anotherId} content="테스트로 보내는 메세지" date="22.07.14" type = {true} />
            <MessagePiece id={id} anotherId={anotherId} content="테스트로 보내는 메세지" date="22.07.14" type = {false} />
            <MessagePiece id={id} anotherId={anotherId} content="테스트로 보내는 메세지" date="22.07.14" type = {true} />
            <MessagePiece id={id} anotherId={anotherId} content="테스트로 보내는 메세지" date="22.07.14" type = {false} />
            <MessagePiece id={id} anotherId={anotherId} content="테스트로 보내는 메세지" date="22.07.14" type = {true} />
            <MessagePiece id={id} anotherId={anotherId} content="테스트로 보내는 메세지" date="22.07.14" type = {false} />

          </div>
        </div>
      </section>
    </div>
  );
}

export default MessageDetail;
