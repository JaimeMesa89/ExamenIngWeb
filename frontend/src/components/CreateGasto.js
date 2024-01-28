import React, { useState } from 'react';
import CloudinaryUploadWidget from './CloudinaryUploadWidget';

const CreateGasto = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    mail: '',
    token: '',
    concepto: '',
    direccion: '',
    lat: '',
    long: '',
    image: '',
  });

  const [cloudName] = useState("donlijdi0");
  const [uploadPreset] = useState("ji9zfwge");
  const [uwConfig] = useState({
      cloudName,
      uploadPreset
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (newImageUrl) => {
    setFormData((prevData) => ({
      ...prevData,
      image: newImageUrl,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming onSubmit is a prop function passed from the parent component
    onSubmit(formData);
    // Optionally, you can reset the form after submission
    setFormData({
      mail: '',
      token: '',
      timestamp: '',
      concepto: '',
      direccion: '',
      lat: '',
      long: '',
      image: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mail:
        <input type="text" name="mail" value={formData.mail} onChange={handleChange} />
      </label>

      <label>
        Token:
        <input type="text" name="token" value={formData.token} onChange={handleChange} />
      </label>

      <label>
        Concepto:
        <input type="text" name="concepto" value={formData.concepto} onChange={handleChange} />
      </label>

      <label>
        Dirección:
        <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
      </label>

      <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={handleImageChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateGasto;