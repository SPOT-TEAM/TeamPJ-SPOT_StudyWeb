import React from "react";
import StudyServiceItem from "./Sections/StudyServiceItem";
import { useNavigate } from "react-router-dom";
import ControlMenu from "../_Common/ControlMenu";

const typeOptionList = [
  { value: "all", name: "All" },
  { value: "helpwanted", name: "구인" },
  { value: "studyhunt", name: "구직" },
  { value: "close", name: "마감" },
];

const UniversityOptionList = [
  { value: "all", name: "All" },
  { value: "empty", name: "순천향대학교" },
  { value: "empty", name: "호서대학교" },
  { value: "empty", name: "선문대학교" },
  { value: "empty", name: "백석대학교" },
  { value: "empty", name: "유원대학교" },
  { value: "empty", name: "백석대학교" },
  { value: "empty", name: "단국대학교" },
  { value: "empty", name: "공주대학교" },
  { value: "empty", name: "상명대학교" },
  { value: "empty", name: "나사렛대학교" },
  { value: "empty", name: "한국과학기술대학교" },
  { value: "empty", name: "국립경찰대학교" },
];

const branchOptionList = [
  { value: "all", name: "All" },
  { value: "empty", name: "프로그래밍" },
  { value: "empty", name: "디자인" },
  { value: "empty", name: "취업" },
  { value: "empty", name: "도서" },
  { value: "empty", name: "언어" },
];


const StudyServicePage = () => {
  const navigate = useNavigate(); 


  // 필터 적용
  // const [filter, setFilter] = useState('all');
  // const getProcessdStudyServiceList = () => {
  //   const filteredList =
  //     filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));
  //   const sortedList = filteredList.sort(compare);
  //   return sortedList;
  // }

  return (
    <div className="StudyServicePage">
      <div className="StudyService">
        <h2>스터디 구인 구직</h2>
        <button onClick={()=>navigate("/edit")}>글 작성하기</button>
      </div>
      <div className="studyOptionList">
        <div className="studyOptionControl">
          <ControlMenu optionList={typeOptionList} />
          <ControlMenu optionList={branchOptionList} />
          <ControlMenu optionList={UniversityOptionList} />
        </div>
        <div className="studyOptionSearch">
          <button>Search</button>
          <input type="text" placeholder="게시글 검색" />
        </div>
      </div>
      {/* {getProcessdStudyServiceList().map((it) => (
        <StudyServiceItem key={it.id} {...it} />
      ))} */}
      <StudyServiceItem
        type="close"
        title="스터디 모집 테스트"
        date="2022.07.12"
        name="test"
      />
    </div>
  );
};

export default StudyServicePage;
