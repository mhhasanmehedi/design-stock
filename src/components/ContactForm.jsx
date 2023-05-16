import React, { useState } from "react";

const initialState = {
  name: "",
  company_name: "",
  email: "",
  work_type: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData(initialState);
  };

  return (
    <form action="" className="contactForm" onSubmit={handleSubmit}>
      <div className="row  g-4">
        <div className="col-md-6">
          <div className="inputField">
            <label htmlFor="name">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="Your name here..."
              id="name"
              name="name"
              value={formData.name}
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="inputField">
            <label htmlFor="company_name">Company Name</label>
            <input
              type="text"
              placeholder="Type here..."
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={(e) =>
                setFormData({ ...formData, company_name: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="inputField">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              placeholder="Your email here..."
              id="email"
              name="email"
              value={formData.email}
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="inputField">
            <label htmlFor="work_type">
              Type's of work <span className="required">*</span>
            </label>
            <select
              id="work_type"
              name="work_type"
              value={formData.work_type}
              required
              onChange={(e) =>
                setFormData({ ...formData, work_type: e.target.value })
              }
            >
              <option value=""> -Select- </option>
              <option value="programmer"> Programmer </option>
              <option value="engineer"> Engineer </option>
              <option value="developer"> Developer </option>
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="inputField">
            <label htmlFor="name">
              Please tell us a bit about your project
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your message here..."
            ></textarea>
          </div>
        </div>
        <div className="col-md-12 text-end">
          <button className="submitBtn" type="submit">
            Send Your Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
