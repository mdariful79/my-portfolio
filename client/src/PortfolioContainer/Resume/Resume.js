import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOfSetStyle, setCarousalOfSetStyle] = useState({});

  const ResumeHeading = (props) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span> {props.heading ? props.heading : ""} </span>
          {props.fromDate && props.toDate ? (
            <dov className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </dov>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span> {props.subHeading ? props.subHeading : ""} </span>
        </div>
        <div className="resume-heading-description">
          <span> {props.description ? props.description : ""} </span>
        </div>
      </div>
    </div>;
  };

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
      </div>
    </div>
  );
}