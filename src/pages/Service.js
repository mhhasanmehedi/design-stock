// import dependencies
import React from "react";
import Layout from "../components/layout/Layout";
import { serviceData } from "../assets/data/data";
import PricingCard from "../components/pricing/PricingCard";
import useDocumentTitle from "../utils/documentTitle";

const Service = () => {
  // Set Document title
  useDocumentTitle("Service | Design Stock");

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
    <Layout>
      <div className="pricingArea sectionPadding">
        <div className="container">
          <h3 className="sectionTitle">Pricing Plans</h3>
          {content}
        </div>
      </div>
    </Layout>
  );
};

export default Service;
