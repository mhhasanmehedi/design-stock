import React from "react";
import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
import Layout from "../components/Layout";
import useDocumentTitle from "../utils/documentTitle";

const NotFound = () => {
  useDocumentTitle("Page Not Found | Design Stock");
  return (
    <Layout>
      <div className="notFound sectionPadding">
        <div className="icon">
          <TbError404 />
        </div>
        <h3>Opps! Page Not Found</h3>
        <Link className="backHomeBtn" to="/home">
          Back Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
