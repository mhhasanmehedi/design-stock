// import dependencies
import React from "react";
import Layout from "../components/layout/Layout";
import AboutArea from "../components/about/AboutArea";
import useDocumentTitle from "../utils/documentTitle";

const About = () => {
  // Set Document Title
  useDocumentTitle("About | Design Stock");

  return (
    <Layout>
      <AboutArea />
    </Layout>
  );
};

export default About;
