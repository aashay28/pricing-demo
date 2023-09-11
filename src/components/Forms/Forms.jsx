import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const Forms = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log("e.target", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://forms.maakeetoo.com/formapi/272", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          AccessCode: "XS6U26NHHES3VVZGDRKC95LE8",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      // Handle any network or other errors here
      console.error("Error:", error);
    }
    // Reset the form fields if needed
    setFormData({
      firstname: "",
      email: "",
      message: "",
    });
    handleClose();
  };
  return (
    <Form onSubmit={handleSubmit} className="d-flex flex-column">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="firstname">Name</Form.Label>
        <Form.Control
          type="text"
          name="firstname"
          placeholder="Aashay Shah"
          autoFocus
          value={formData.name}
          onChange={(e) => handleInputChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="aashay@example.com"
          value={formData.email}
          onChange={(e) => handleInputChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="message">Order Comments</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          value={formData.message}
          onChange={(e) => handleInputChange(e)}
        />
      </Form.Group>
      <Button type="submit" className="btn btn-primary w-25 align-self-center">
        Submit
      </Button>
    </Form>
  );
};

export default Forms;
