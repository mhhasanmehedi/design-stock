import React from "react";
import Layout from "../components/Layout";
import AboutArea from "../components/AboutArea";
import PricingArea from "../components/PricingArea";
import PortfolioArea from "../components/PortfolioArea";

const Home = () => {
  return (
    <Layout>
      <AboutArea />
      <PricingArea />
      <PortfolioArea />
    </Layout>
  );
};

export default Home;
