import React from 'react';
import CreatorCard from '../components/CreatorCard';


import { useNavigate } from 'react-router-dom';

const ShowCreators = ({ creators, loading }) => {
  const navigate = useNavigate();
  return (
    <div className="show-creators">
  <button className="contrast" style={{marginBottom: '1rem', backgroundColor: '#0d6efd', color: '#fff'}} onClick={() => navigate('/add')}>Add Content Creator</button>
      {loading ? (
        <p>Loading creators...</p>
      ) : creators.length === 0 ? (
        <p>No content creators found.</p>
      ) : (
        creators.map((creator) => (
          <CreatorCard key={creator.id} {...creator} />
        ))
      )}
    </div>
  );
};

export default ShowCreators;
