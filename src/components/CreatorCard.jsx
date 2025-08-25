
import React from 'react';
import PropTypes from 'prop-types';
import './CreatorCard.css';
import { useNavigate } from 'react-router-dom';

const CreatorCard = ({ id, name, url, imageURL }) => {
  const navigate = useNavigate();
  return (
    <div className="creator-card">
      {imageURL && <img src={imageURL} alt={name} className="creator-image" />}
      <h2 className="creator-name">{name}</h2>
      <a className="creator-link" href={url} target="_blank" rel="noopener noreferrer">Visit</a>
      {id && (
        <div className="creator-card-actions">
          <button className="creator-btn" onClick={() => navigate(`/creator/${id}`)}>View</button>
          <button className="creator-btn" onClick={() => navigate(`/edit/${id}`)}>Edit</button>
        </div>
      )}
    </div>
  );
};

CreatorCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
};

export default CreatorCard;
