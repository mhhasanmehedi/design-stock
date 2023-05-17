// import dependencies
import React from "react";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import useDocumentTitle from "../utils/documentTitle";

const Contact = () => {
  // Set Document Title
  useDocumentTitle("Contact | Design Stock");

  return (
    <Layout>
      <div className="contact sectionPadding">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <ContactInfo />
            </div>
            <div className="col-md-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
