import React from "react";
import Layout from "../components/Layout";
import AboutArea from "../components/AboutArea";
import useDocumentTitle from "../utils/documentTitle";

const About = () => {
  useDocumentTitle("About | Design Stock");

  return (
    <Layout>
      <AboutArea />
    </Layout>
  );
};

export default About;
