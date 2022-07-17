import React from 'react'
import ControlMenu from '../_Common/ControlMenu';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import StudyServiceTitleItem from './Sections/StudyServiceTitleItem';

const typeOptionList = [
  { value: "helpwanted", name: "구인" },
  { value: "studyhunt", name: "구직" },
  { value: "close", name: "마감" },
];
const branchOptionList = [
  { value: "empty", name: "프로그래밍" },
  { value: "empty", name: "디자인" },
  { value: "empty", name: "취업" },
  { value: "empty", name: "도서" },
  { value: "empty", name: "언어" },
];



function StudyServiceEditPage() {
  const contentRef = useRef();
  const navigate = useNavigate();

  const [titleItem, setTitleItem] = useState(1);
  const handleClickTitleItem = (titleItem) => {
    setTitleItem(titleItem);
  };
  const [content, setContent] = useState("");

  return (
    <div className='StudyServiceEditPage'>
      <div className='StudyEditControl'>
        <div className='leftControl'>
        <button onClick={()=> navigate(-1)}>뒤로가기</button>
        </div>
        <div className='rightControl'>
        <ControlMenu optionList={typeOptionList} />
        <ControlMenu optionList={branchOptionList} />
        <button>작성하기</button>
        </div>
      </div>
      <section className='StudyTitleImgWrapper'>
        <button onClick={() => handleClickTitleItem(1) } >1</button>
        <button onClick={() => handleClickTitleItem(2) }>2</button>
        <button onClick={() => handleClickTitleItem(3) }>3</button>
        <div className={['StudyTitleImgBox', `StudyTitleImgBox_${titleItem}`].join(" ")} >
          <input className='StudyTitleImg' placeholder="타이틀 제목을 입력하세요" />
        </div>
      </section>
      <section className='StudyTitleTextWrapper'>
        <input className='StudyTitleTextInput' placeholder='제목을 입력하세요.'/>
      </section>
      <section className='StudyContentWrapper'>
        <div className="StudyTitleContentText">
            <textarea
              placeholder="내용을 입력하세요"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
  
      </section>
    </div>
  )
}

export default StudyServiceEditPage