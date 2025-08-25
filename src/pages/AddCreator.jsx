
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const AddCreator = () => {
  const [form, setForm] = useState({ name: '', url: '', description: '', imageURL: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { data, error } = await supabase.from('creators').insert([form]);
    setLoading(false);
    if (error) {
      setError('Failed to add creator.');
    } else {
      navigate('/');
    }
  };

  return (
    <form className="add-creator" onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="url" value={form.url} onChange={handleChange} placeholder="URL" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
      <input name="imageURL" value={form.imageURL} onChange={handleChange} placeholder="Image URL (optional)" />
      <button type="submit" disabled={loading}>Add Creator</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </form>
  );
};

export default AddCreator;
