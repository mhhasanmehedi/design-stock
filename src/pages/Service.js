import React from "react";
import Layout from "../components/Layout";

import { serviceData } from "../assets/data/data";
import PricingCard from "../components/PricingCard";
import useDocumentTitle from "../utils/documentTitle";

const Service = () => {
  useDocumentTitle("Service | Design Stock");

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
