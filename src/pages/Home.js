// import dependencies
import React from "react";
import Layout from "../components/layout/Layout";
import AboutArea from "../components/about/AboutArea";
import PricingArea from "../components/pricing/PricingArea";
import PortfolioArea from "../components/portfolio/PortfolioArea";
import useDocumentTitle from "../utils/documentTitle";

const Home = () => {
  // Set Document Title
  useDocumentTitle("Home | Design Stock");

  return (
    <Layout>
      <AboutArea />
      <PricingArea />
      <PortfolioArea />
    </Layout>
  );
};

export default Home;
