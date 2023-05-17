// import dependencies
import React from "react";
import StarIcon from "../../assets/images/star.png";
import AboutImg from "../../assets/images/aboutImg.png";

const AboutArea = () => {
  return (
    <div className="aboutArea sectionPadding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="aboutContent">
              <h1 className="aboutTitle">
                Empowering Your Brand Story <br /> With Unique Logo design
              </h1>
              <p className="aboutPara">
                Our logo design service provides you with a custom-designed logo
                that represents your brand or business. Our experienced team of
                designers will work with you to understand your vision and
                create a unique logo that accurately reflects your values and
                goals.
                <br />
                <br />
                Our service includes multiple rounds of revisions to ensure your
                satisfaction with the final product. Once completed, you will
                receive all necessary files in various formats for use on a
                variety of platforms. Order now to elevate your brand identity
                with a professional, eye-catching logo. Invited me for your
                project! Save your time and money!
              </p>
              <div className="designProcess">
                <h3>Our Logo Design Process</h3>
                <p>
                  Research and Analysis {">"} Brainstorming {">"} Concept
                  Development {">"} Feedback and Revisions {">"} Finalize and
                  Deliver.
                </p>
              </div>
              <div className="achievement">
                <h3>Our Achievement</h3>
                <div className="achievementItems">
                  <div className="achievementItem">
                    <h4>250+</h4>
                    <p>Projects Completed</p>
                  </div>
                  <div className="achievementItem">
                    <h4>200+</h4>
                    <p>Happy Clients</p>
                  </div>
                  <div className="achievementItem">
                    <h4>
                      4.9 <img src={StarIcon} alt="Star Icon" />
                    </h4>
                    <p>Positive Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="aboutImg">
              <img src={AboutImg} alt="About " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
