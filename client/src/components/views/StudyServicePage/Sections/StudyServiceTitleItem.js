import React from 'react';

const StudyServiceTitleItem = ({
  studyTitle_id,
  studyTtitle_img,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={[
        "StudyServiceTitleItem",
        isSelected ? `StudyServiceTitleItem_on_${studyTitle_id}` : `StudyServiceTitleItem_off`,
      ].join(" ")}
      onClick={() => onClick(studyTitle_id)}
    >
      <img src={studyTtitle_img} />
    </div>
  );
};

export default React.memo(StudyServiceTitleItem);
