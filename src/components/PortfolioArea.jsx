import React from "react";
import Portfolio1 from "../assets/images/portfolio/portfolio1.png";
import Portfolio2 from "../assets/images/portfolio/portfolio2.png";
import Portfolio3 from "../assets/images/portfolio/portfolio3.png";
import Portfolio4 from "../assets/images/portfolio/portfolio4.png";

const portfolioData = [Portfolio1, Portfolio2, Portfolio3, Portfolio4];

const PortfolioArea = () => {
  return (
    <div className="portfolioArea sectionPadding">
      <div className="container">
        <h3 className="sectionTitle">Our Portfolios</h3>
        <div className="row g-4">
          {portfolioData?.map((item, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div className="singlePortfolio">
                <img src={item} alt="Portoflio item" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioArea;
