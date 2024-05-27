"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface PortfolioDataType {
  id: number;
  title: string;
  client: string;
  services: string;
  date: string;
  des: string;
  heading: string;
  subHeading: string;
  category: string;
  images: File[];
  challenges: string[];
  solutions: string[];
  video: string;
}

const PortfolioForm: React.FC = () => {
  const [formData, setFormData] = useState<PortfolioDataType>({
    id: 0,
    title: "",
    client: "",
    services: "",
    heading: "",
    subHeading: "",
    category: "",
    date: "",
    des: "",
    video: "",
    images: [],
    challenges: [""],
    solutions: [""],
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        images: Array.from(e.target.files),
      });
    }
  };

  const handleAddChallenge = () => {
    setFormData({
      ...formData,
      challenges: [...formData.challenges, ""],
    });
  };

  const handleChallengeChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newChallenges = formData.challenges.map((challenge, i) =>
      i === index ? e.target.value : challenge
    );
    setFormData({
      ...formData,
      challenges: newChallenges,
    });
  };

  const handleAddSolution = () => {
    setFormData({
      ...formData,
      solutions: [...formData.solutions, ""],
    });
  };

  const handleSolutionChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newSolutions = formData.solutions.map((solution, i) =>
      i === index ? e.target.value : solution
    );
    setFormData({
      ...formData,
      solutions: newSolutions,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("id", formData.id.toString());
    data.append("title", formData.title);
    data.append("client", formData.client);
    data.append("services", formData.services);
    data.append("date", formData.date);
    data.append("des", formData.des);
    data.append("heading", formData.heading);
    data.append("subHeading", formData.subHeading);
    data.append("category", formData.category);
    data.append("video", formData.video);
    formData.images.forEach((image) => data.append("images", image));
    formData.challenges.forEach((challenge, index) =>
      data.append(`challenges[${index}]`, challenge)
    );
    formData.solutions.forEach((solution, index) =>
      data.append(`solutions[${index}]`, solution)
    );

    try {
      const response = await axios.post("/api/portfolio/add-portfolio", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 seconds
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-center my-4">Portfolio Form</h1>
      <div className="container mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Pharmanecia">Pharmanecia</option>
              <option value="PharmaNEST">PharmaNEST</option>
              <option value="Biomedical Research Publications">
                Biomedical Research Publications
              </option>
              <option value="PharMAIR">PharMAIR</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="heading" className="form-label">
              Heading
            </label>
            <input
              type="text"
              className="form-control"
              id="heading"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subHeading" className="form-label">
              Sub Heading
            </label>
            <input
              type="text"
              className="form-control"
              id="subHeading"
              name="subHeading"
              value={formData.subHeading}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="client" className="form-label">
              Client
            </label>
            <input
              type="text"
              className="form-control"
              id="client"
              name="client"
              value={formData.client}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="services" className="form-label">
              Services
            </label>
            <input
              type="text"
              className="form-control"
              id="services"
              name="services"
              value={formData.services}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="text"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="des" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="des"
              name="des"
              value={formData.des}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="des" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="des"
              name="des"
              value={formData.des}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="video" className="form-label">
              Video URL
            </label>
            <input
              type="text"
              className="form-control"
              id="video"
              name="video"
              multiple
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Challenges</label>
            {formData.challenges.map((challenge, index) => (
              <input
                key={index}
                type="text"
                className="form-control mb-2"
                name={`challenge-${index}`}
                value={challenge}
                onChange={(e) => handleChallengeChange(e, index)}
              />
            ))}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleAddChallenge}
            >
              Add Challenge
            </button>
          </div>
          <div className="mb-3">
            <label className="form-label">Solutions</label>
            {formData.solutions.map((solution, index) => (
              <input
                key={index}
                type="text"
                className="form-control mb-2"
                name={`solution-${index}`}
                value={solution}
                onChange={(e) => handleSolutionChange(e, index)}
              />
            ))}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleAddSolution}
            >
              Add Solution
            </button>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {loading && <div className="loader">Loading...</div>}
          {success && (
            <div className="alert alert-success" role="alert">
              Successfully submitted the form!
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default PortfolioForm;
