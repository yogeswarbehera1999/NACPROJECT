import React, { useState } from 'react';
import citizenService from '../../services/citizenService';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    photo: null
  });

  const handleChange = (e) => {
    if (e.target.name === 'photo') {
      setFormData({ ...formData, photo: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('title', formData.title);
    form.append('description', formData.description);
    form.append('photo', formData.photo);

    try {
      const res = await citizenService.submitComplaint(form);
      alert('Complaint submitted!');
    } catch (err) {
      alert('Failed to submit complaint');
    }
  };

  return (
    <form className="space-y-4 p-4 bg-white shadow rounded" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold">Submit a Complaint</h2>
      <input
        name="title"
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border px-3 py-2"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border px-3 py-2"
        required
      />
      <input
        name="photo"
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default ComplaintForm;
