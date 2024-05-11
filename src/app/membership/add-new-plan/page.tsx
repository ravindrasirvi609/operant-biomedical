"use client";
import React, { useState } from "react";
import axios from "axios";

interface FormData {
  title: string;
  price: number;
  description: string;
  duration: number;
  maxAllowedBooks: number;
  discount: number;
}

const BookForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    price: 0,
    description: "",
    duration: 0,
    maxAllowedBooks: 0,
    discount: 0,
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
        maxAllowedBooks: 0,
        discount: 0,
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
    <>
      {loading && <div>Loading...</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Duration:</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Max Allowed Books:</label>
          <input
            type="number"
            name="maxAllowedBooks"
            value={formData.maxAllowedBooks}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Discount:</label>
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
    </>
  );
};

export default BookForm;
