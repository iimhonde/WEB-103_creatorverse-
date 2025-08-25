
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

const ViewCreator = () => {
  const { id } = useParams();
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
    <div className="view-creator">
      <CreatorCard {...creator} />
      <button style={{marginTop:'1rem'}} onClick={() => navigate(`/edit/${id}`)}>Edit</button>
    </div>
  );
};

export default ViewCreator;
