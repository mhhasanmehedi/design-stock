// Import Dependency
import React from "react";

const PortfolioCard = ({ portfolio }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="singlePortfolio">
        <img src={`${portfolio.img}`} alt="Portfolio" />
      </div>
    </div>
  );
};

export default PortfolioCard;
