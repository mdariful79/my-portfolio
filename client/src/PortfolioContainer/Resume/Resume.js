import React, { useEffect, useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { buffer } from "rxjs";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span> {props.heading ? props.heading : ""} </span>
            {props.fromDate && props.toDate ? (
              <dov className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </dov>
            ) : (
              <div ></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span> {props.subHeading ? props.subHeading : ""} </span>
          </div>
          <div className="resume-heading-description">
            <span> {props.description ? props.description : ""} </span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "C++", ratingPercentage: 90 },
    { skill: "React Native", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React Js, Bootstrap",
    },
    {
      title: "Online shopping Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React Js, Bootstrap",
    },
    {
      title: "Blood Donation Androaid App",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React Js, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Internation Islamic University Chittagong-(IIUC)"}
        subHeading={"BSc in CSE"}
        fromDate={"2019"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Cox's Bazar Govt. College"}
        subHeading={"Higher Secondary School Certificates"}
        fromDate={"2015"}
        toDate={"2016"}
      />
      <ResumeHeading
        heading={"Cox's Bazar Govt. High School"}
        subHeading={"Secondary School Certificates"}
        fromDate={"2010"}
        toDate={"2015"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"StamaSoft"}
        subHeading={"Android developer Intern & RND Intern"}
        fromDate={"2020"}
        toDate={"2022"}
      />

      <div className="experience-description">
        <span className="resume-description-text">
          Currently working as MERN stack web and mobile developer.
        </span>
      </div>

      <div className="experience-description">
        <span className="resume-description-text">
          -As a MERN Stack Developer at StamaSoft Tech Solutions, I built and
          maintained web applications, collaborating cross-functionally and
          deploying on AWS, ensuring high-quality software solutions.
        </span>
        <br />
        <span className="resume-description-text">
          My experience as a MERN Stack Developer at XYZ Tech Solutions has
          equipped me with strong problem-solving skills, a deep understanding
          of web development best practices, and the ability to deliver
          high-quality software solutions in a collaborative environment. I look
          forward to contributing my expertise to future projects and staying at
          the forefront of web development innovations.
        </span>
        <br />
        <span className="resume-description-text">
          -I stretch my mental capacity to develop UI as per the given designs.
        </span>
      </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"> </div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,


    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,


    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="I believe that education for All."
      />
      <ResumeHeading
        heading="Music"
        description="I believe that education for All."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I believe that education for All."
      />
    </div>
  </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" }
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require (`../../assets/Resume/${bullet.logoSrc}`)}
          alt="OOps! no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>
            <div className="resume-bullet-details">{getResumeScreen()}</div>
          </div>
        </div>
      </div>
  );
}
