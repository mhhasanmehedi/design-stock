import React from "react";
import Layout from "../components/Layout";
import AboutArea from "../components/AboutArea";
import PricingArea from "../components/PricingArea";
import PortfolioArea from "../components/PortfolioArea";
import useDocumentTitle from "../utils/documentTitle";

const Home = () => {
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
