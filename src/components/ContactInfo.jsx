import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <h2>Contact us</h2>
      <div className="contactItems">
        <div className="contactItem">
          <h5>Office Address:</h5>
          <p>Kachijhuli Mor, Mymensingh Kachijhuli Mor, Mymensingh</p>
        </div>
        <div className="contactItem">
          <h5>Phone Number:</h5>
          <p>
            <a href="tel:+8801555665447">+8801555665447</a>
            <a href="tel:+8801555665447">+8801555665447</a>
          </p>
        </div>
        <div className="contactItem">
          <h5>Email:</h5>
          <p>
            <a href="mailto:support.designagency@gmail.com">
              support.designagency@gmail.com
            </a>{" "}
            <a href="mailto:info.admin@gmail.com">info.admin@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
