
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', url: '', description: '', imageURL: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
      if (!error && data) {
        setForm({ ...data });
      } else {
        setError('Creator not found.');
      }
      setLoading(false);
    };
    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.from('creators').update(form).eq('id', id);
    setLoading(false);
    if (error) {
      setError('Failed to update creator.');
    } else {
      navigate(`/creator/${id}`);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.from('creators').delete().eq('id', id);
    setLoading(false);
    if (error) {
      setError('Failed to delete creator.');
    } else {
      navigate('/');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{color:'red'}}>{error}</p>;

  return (
    <form className="edit-creator" onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="url" value={form.url} onChange={handleChange} placeholder="URL" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
      <input name="imageURL" value={form.imageURL || ''} onChange={handleChange} placeholder="Image URL (optional)" />
      <button type="submit" disabled={loading}>Save</button>
      <button type="button" onClick={handleDelete} disabled={loading} style={{marginLeft:'1rem',color:'red'}}>Delete</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </form>
  );
};

export default EditCreator;
