"use client";
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

interface FormData {
  title: string;
  price: number;
  description: string;
  duration: number;
}

const BookForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    price: 0,
    description: "",
    duration: 0,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "/api/membershipPlan/addMembershipPlan",
        formData
      );
      console.log(response.data);
      setLoading(false);
      setFormData({
        title: "",
        price: 0,
        description: "",
        duration: 0,
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert(
        "An error occurred while submitting the form. Please try again later."
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Book Form</h2>
      {loading && <div className="alert alert-info">Loading...</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">
            Duration:
          </label>
          <input
            type="number"
            className="form-control"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
