import React, { useState } from "react";
import { submitMachineryDefect } from "../../services/supervisorService";

const MachineryDefectForm = () => {
  const [formData, setFormData] = useState({
    machineId: "",
    issue: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitMachineryDefect(formData);
      alert("Machinery defect submitted");
      setFormData({ machineId: "", issue: "", description: "" });
    } catch (err) {
      alert("Error submitting defect");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-semibold mb-2">Machinery Defect</h2>
      <input
        type="text"
        name="machineId"
        placeholder="Machine ID"
        value={formData.machineId}
        onChange={handleChange}
        className="input"
      />
      <input
        type="text"
        name="issue"
        placeholder="Issue"
        value={formData.issue}
        onChange={handleChange}
        className="input"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="textarea"
      />
      <button type="submit" className="btn-primary">Submit</button>
    </form>
  );
};

export default MachineryDefectForm;
