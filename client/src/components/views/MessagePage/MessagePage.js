import React,{useState} from "react";
import MessageItem from "./Sections/MessageItem";

function MessagePage() {
  const [important, setImportant] = useState(false);
  const toggleImpotant = () => {
    setImportant(important => !important);
  }

  return (
    <div className="MessagePage">
      <div className="MessageHead">
        <h2>MessagePage</h2>
        <div className="MessageControl">
          <button className="controlImportant" onClick={()=>toggleImpotant()}>{important ? "중요한" : "전체"}</button>
          <button className="controlDelete">편집하기</button>
        </div>
      </div>
      <div className="MessageList">
        <MessageItem
          id="user"
          anotherId="hong"
          name="user"
          anotherName="hong"
          newestContent="test 중입니다."
          date="22.07.14"
        />
        <MessageItem
          id="user"
          anotherId="kim"
          name="user"
          anotherName="kim"
          newestContent="test 중입니다."
          date="22.07.14"
        />
        <MessageItem
          id="user"
          anotherId="jung"
          name="user"
          anotherName="jung"
          newestContent="test 중입니다."
          date="22.07.14"
        />
      </div>
    </div>
  );
}

export default MessagePage;
