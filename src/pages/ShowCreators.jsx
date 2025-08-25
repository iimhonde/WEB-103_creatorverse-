import React from 'react';
import CreatorCard from '../components/CreatorCard';


import { useNavigate } from 'react-router-dom';

const ShowCreators = ({ creators, loading }) => {
  const navigate = useNavigate();
  return (
    <div className="show-creators">
      <h1 style={{marginBottom: '2rem', color: '#fff', textShadow: '0 2px 8px #000', fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px'}}>Creatorverse</h1>
      <button className="contrast" style={{marginBottom: '1rem', backgroundColor: '#0d6efd', color: '#fff'}} onClick={() => navigate('/add')}>Add Content Creator</button>
      {loading ? (
        <p style={{color: '#fff', textShadow: '0 2px 8px #000'}}>Loading creators...</p>
      ) : creators.length === 0 ? (
        <p style={{color: '#fff', textShadow: '0 2px 8px #000'}}>No content creators found.</p>
      ) : (
        creators.map((creator) => (
          <CreatorCard key={creator.id} {...creator} />
        ))
      )}
    </div>
  );
};

export default ShowCreators;
