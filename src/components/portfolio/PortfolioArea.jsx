// import dependencies
import React from "react";
import { portfolioData } from "../../assets/data/data";
import PortfolioCard from "./PortfolioCard";

const PortfolioArea = () => {
  return (
    <div className="portfolioArea sectionPadding">
      <div className="container">
        <h3 className="sectionTitle">Our Portfolios</h3>
        <div className="row g-4">
          {portfolioData?.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioArea;
