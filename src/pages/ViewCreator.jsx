
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

const ViewCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
      if (!error && data) {
        setCreator(data);
      } else {
        setCreator(null);
      }
      setLoading(false);
    };
    fetchCreator();
  }, [id]);

  if (loading) return <p>Loading creator...</p>;
  if (!creator) return <p>Creator not found.</p>;

  return (
    <div className="view-creator" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh'}}>
      <div style={{
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '16px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
        padding: '2.5rem 2rem',
        maxWidth: '420px',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {creator.imageURL && (
          <img src={creator.imageURL} alt={creator.name} className="creator-image" style={{width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.10)'}} />
        )}
        <h2 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#4b2e6d'}}>{creator.name}</h2>
        <a href={creator.url} target="_blank" rel="noopener noreferrer" style={{color: '#0d6efd', fontWeight: '500', marginBottom: '1.5rem', fontSize: '1.1rem'}}>Visit</a>
        <p style={{fontSize: '1.1rem', color: '#222', marginBottom: '1.5rem', lineHeight: '1.6'}}>{creator.description}</p>
  <button type="button" style={{backgroundColor: '#4b2e6d', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.5rem 1.2rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.12)'}} onClick={() => navigate(`/edit/${id}`)}>Edit</button>
      </div>
    </div>
  );
};

export default ViewCreator;
