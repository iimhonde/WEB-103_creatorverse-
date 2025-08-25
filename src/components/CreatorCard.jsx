
import React from 'react';
import PropTypes from 'prop-types';
import './CreatorCard.css';
import { useNavigate } from 'react-router-dom';

const CreatorCard = ({ id, name, url, description, imageURL }) => {
  const navigate = useNavigate();
  return (
    <article className="creator-card card" style={{padding:'2rem', boxShadow:'var(--card-box-shadow)'}}>
      {imageURL && <img src={imageURL} alt={name} className="creator-image" style={{marginBottom:'1rem'}} />}
      <h2>{name}</h2>
      <p>{description}</p>
      <a className="secondary" href={url} target="_blank" rel="noopener noreferrer">Visit</a>
      {id && (
        <div style={{marginTop:'1rem', display:'flex', gap:'0.5rem'}}>
          <button className="outline" onClick={() => navigate(`/creator/${id}`)}>View</button>
          <button className="contrast" onClick={() => navigate(`/edit/${id}`)}>Edit</button>
        </div>
      )}
    </article>
  );
};

CreatorCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
};

export default CreatorCard;
