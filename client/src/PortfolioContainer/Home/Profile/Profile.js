import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/ariful079/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Ariful</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Pro Dev",
                    2000,
                    "Joy Bangla Dev",
                    2000,
                    "React/React Native Dev",
                    2000,
                    "Md. Ariful Islam",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building application with front and back end operation.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              Hire Me
            </button>
            <a href="arif_cv.pdf" download="arif_cv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}
