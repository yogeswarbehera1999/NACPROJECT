import React, { useState } from "react";
import { submitQubeFulfillment } from "../../services/supervisorService";

const QubeFulfillmentForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    quantity: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitQubeFulfillment(formData);
      alert("Qube fulfillment submitted");
      setFormData({ location: "", quantity: "", status: "" });
    } catch (err) {
      alert("Error submitting qube");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-semibold mb-2">Qube Fulfillment</h2>
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="input"
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        className="input"
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={formData.status}
        onChange={handleChange}
        className="input"
      />
      <button type="submit" className="btn-primary">Submit</button>
    </form>
  );
};

export default QubeFulfillmentForm;
