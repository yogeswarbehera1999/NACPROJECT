import React, { useState } from "react";
import { submitMoKhataEntry } from "../../services/supervisorService";

const MoKhataEntryForm = () => {
  const [formData, setFormData] = useState({
    entryId: "",
    remarks: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitMoKhataEntry(formData);
      alert("Mo Khata entry submitted");
      setFormData({ entryId: "", remarks: "", date: "" });
    } catch (err) {
      alert("Error submitting entry");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-semibold mb-2">Mo Khata Entry</h2>
      <input
        type="text"
        name="entryId"
        placeholder="Entry ID"
        value={formData.entryId}
        onChange={handleChange}
        className="input"
      />
      <textarea
        name="remarks"
        placeholder="Remarks"
        value={formData.remarks}
        onChange={handleChange}
        className="textarea"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="input"
      />
      <button type="submit" className="btn-primary">Submit</button>
    </form>
  );
};

export default MoKhataEntryForm;
