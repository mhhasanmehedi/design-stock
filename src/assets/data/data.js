// import react icons
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Portfolio1 from "../images/portfolio/portfolio1.png";
import Portfolio2 from "../images/portfolio/portfolio2.png";
import Portfolio3 from "../images/portfolio/portfolio3.png";
import Portfolio4 from "../images/portfolio/portfolio4.png";

// Export service Data
export const serviceData = [
  {
    id: 1,
    title: "Basic Package",
    price: 29,
    features: [
      "1 Concept Included",
      "Logo Transparency",
      "Vector File",
      "Printable File",
      "Include 3D Mockup",
      "Include source file",
      "Unlimited Revisions",
      "3 Days Delivery",
    ],
    comment: "",
  },
  {
    id: 2,
    title: "Standard Package",
    price: 99,
    features: [
      "2 Concept Included With Hi Quality Design",
      "Logo Transparency",
      "Vector File",
      "Printable File",
      "Include 3D Mockup",
      "Include source file",
      "Include Social Media kit",
      "Unlimited Revisions",
      "3 Days Delivery",
    ],
    comment: "popular",
  },
  {
    id: 3,
    title: "Premium Package",
    price: 149,
    features: [
      "3 Concept Included With Premium Quality Design",
      "Logo Transparency",
      "Vector File",
      "Printable File",
      "Include 3D Mockup",
      "Include source file",
      "Stationery Designs",
      "Include Social Media kit",
      "Unlimited Revisions",
      "4 Days Delivery",
    ],
    comment: "recommended",
  },
];

// Export Navbar Data
export const navbarData = [
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

// Export social Data
export const socialData = [
  {
    link: "https://www.facebook.com/",
    icon: <BsFacebook />,
  },
  {
    link: "https://twitter.com/",
    icon: <BsTwitter />,
  },
  {
    link: "https://api.whatsapp.com/send?phone=1234567890",
    icon: <BsWhatsapp />,
  },
  {
    link: "https://www.instagram.com/",
    icon: <AiFillInstagram />,
  },
];

// Footer Navbar Data
export const footerNavData = [
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

// Export Portfolio Data
export const portfolioData = [
  { id: 1, img: Portfolio1 },
  { id: 2, img: Portfolio2 },
  { id: 3, img: Portfolio3 },
  { id: 4, img: Portfolio4 },
];
