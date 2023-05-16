import React from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <Layout>
      <div className="contact sectionPadding">
        <div className="container">
          <div className="row">
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
