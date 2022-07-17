import React from "react";
import { useNavigate } from "react-router-dom";

const StudyServiceItem = ({ id, type, title, date, name }) => {
  // const navigate = useNavigate();
  // const goDetail = () => {
  //   navigate(`/studyservice/${id}`);
  // };
  // const goEdit = () => {
  //   navigate(`/studyservice/${id}`);
  // };

  return (
    <div className="StudyServiceItem">
      <div
        // onClick={goDetail}
        className="type_img_wrapper"
      >
        <img
          src={
            process.env.PUBLIC_URL + `assets/studyServiceItem/item${type}.png`
          }
        />
      </div>
      {/* <div className="info_wrapper" onClick={goDetail}> */}
      <div className="item_title">{title.slice(0, 25)}</div>
      <div className="info_Wrapper">
        <div className="item_date">{date}</div>
        <div className="item_name">{name}</div>
      </div>
    </div>
  );
};

export default StudyServiceItem;
