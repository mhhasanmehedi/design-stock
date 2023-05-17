// import dependencies
import React from "react";
import PricingCard from "./PricingCard";
import { serviceData } from "../../assets/data/data";

const PricingArea = () => {
  // Decide what to render
  let content;

  if (serviceData.length === 0) {
    content = <div>No Service Found!</div>;
  } else if (serviceData.length > 0) {
    content = (
      <div className="row g-4">
        {serviceData?.map((service) => (
          <PricingCard service={service} key={service.id} />
        ))}
      </div>
    );
  }

  return (
    <div className="pricingArea sectionPadding">
      <div className="container">
        <h3 className="sectionTitle">Pricing Plans</h3>
        {content}

        <div className="requirement">
          <h4>What are the requirements to order a logo design?</h4>
          <p>
            Your Logo Design Brief {">"} Brand Guidelines {">"}
            Budget {">"} Timeline {">"} Communication . <br />
            <br />
            Overall, the more information and guidance the client can provide,
            the better the designer can create a logo that meets their needs and
            achieves their goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingArea;
