// Import dependencies
import React from "react";
import Logo from "../../assets/images/footerLogo.png";
import { Link } from "react-router-dom";
import { footerNavData, socialData } from "../../assets/data/data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerTop">
          <div className="footerLogo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="footerNav">
            {footerNavData?.map((item) => (
              <Link
                to={item.slug}
                className="footerNavLink"
                key={item.pageName}
              >
                {item.pageName}
              </Link>
            ))}
          </div>

          <div className="socialLinks">
            {socialData?.map((item, i) => (
              <a
                className="socialLink"
                href={item.link}
                key={i}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footerBottom">
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
