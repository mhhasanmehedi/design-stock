import React from "react";
import Logo from "../assets/images/footerLogo.png";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const footerNavData = [
  {
    pageName: "Home",
    slug: "/home",
  },
  {
    pageName: "Our Services",
    slug: "/service",
  },
  {
    pageName: "About us",
    slug: "/about",
  },
  {
    pageName: "Contact us",
    slug: "/contact",
  },
];

const socialData = [
  {
    link: "/",
    icon: <BsFacebook />,
  },
  {
    link: "/",
    icon: <BsTwitter />,
  },
  {
    link: "/",
    icon: <BsWhatsapp />,
  },
  {
    link: "/",
    icon: <AiFillInstagram />,
  },
];

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
              <a className="socialLink" href={item.link} key={i}>
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
