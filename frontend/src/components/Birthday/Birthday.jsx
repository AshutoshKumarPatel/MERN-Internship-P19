import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const EventForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    startDate: null,
    endDate: null,
    location: "",
    hallOwner: "",
    performer: "",
    catering: "",
    musician: "",
    decorator: "",
  });

  // Define state variables for service options
  const [hallOwnerOptions, setHallOwnerOptions] = useState([]);
  const [performerOptions, setPerformerOptions] = useState([]);
  const [cateringOptions, setCateringOptions] = useState([]);
  const [musicianOptions, setMusicianOptions] = useState([]);

  const fetchServiceOptions = async (service) => {
    try {
      const response = await axios.get(`/api/user/${service}`); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${service} options:`, error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const [hallOwners, performers, caterings, musicians, decorators] = await Promise.all([
        fetchServiceOptions("hallOwner"),
        fetchServiceOptions("performer"),
        fetchServiceOptions("catering"),
        fetchServiceOptions("musician"),
      ]);

      // Update state variables with fetched data
      setHallOwnerOptions(hallOwners);
      setPerformerOptions(performers);
      setCateringOptions(caterings);
      setMusicianOptions(musicians);

      setFormData((prevData) => ({
        ...prevData,
        hallOwner: hallOwners.length > 0 ? hallOwners[0]._id : "",
        performer: performers.length > 0 ? performers[0]._id : "",
        catering: caterings.length > 0 ? caterings[0]._id : "",
        musician: musicians.length > 0 ? musicians[0]._id : "",
      }));
    };

    fetchData();
  }, []); // Run this effect only once when the component mounts

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDateChange = (date, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: date,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint for form submission
      await axios.post("/api/submit-event", formData);
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Event Name */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700">Event Name</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700">Start Date</label>
          <DatePicker
            selected={formData.startDate}
            onChange={(date) => handleDateChange(date, 'startDate')}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* End Date */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700">End Date</label>
          <DatePicker
            selected={formData.endDate}
            onChange={(date) => handleDateChange(date, 'endDate')}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Select fields for services */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-600 mb-2">
            Select Services:
          </p>
          {/* Hall Owner */}
          <div className="mb-2">
            <label className="block text-sm text-gray-700">Hall Owner</label>
            <select
              name="hallOwner"
              value={formData.hallOwner}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            >
              {/* {hallOwnerOptions &&
                hallOwnerOptions.map((option) => (
                  <option key={option._id} value={option._id}>
                    {option.name}
                  </option>
                ))} */}
            </select>
          </div>

          {/* Performer */}
          <div className="mb-2">
            <label className="block text-sm text-gray-700">Performer</label>
            <select
              name="performer"
              value={formData.performer}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            >
              {/* {performerOptions &&
                performerOptions.map((option) => (
                  <option key={option._id} value={option._id}>
                    {option.name}
                  </option>
                ))} */}
            </select>
          </div>

          {/* Catering */}
          <div className="mb-2">
            <label className="block text-sm text-gray-700">Catering</label>
            <select
              name="catering"
              value={formData.catering}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            >
              {/* {cateringOptions &&
                cateringOptions.map((option) => (
                  <option key={option._id} value={option._id}>
                    {option.name}
                  </option>
                ))} */}
            </select>
          </div>

          {/* Musician */}
          <div className="mb-2">
            <label className="block text-sm text-gray-700">Musician</label>
            <select
              name="musician"
              value={formData.musician}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            >
              {/* {musicianOptions &&
                musicianOptions.map((option) => (
                  <option key={option._id} value={option._id}>
                    {option.name}
                  </option>
                ))} */}
            </select>
          </div>

          {/* Decorator */}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventForm;
