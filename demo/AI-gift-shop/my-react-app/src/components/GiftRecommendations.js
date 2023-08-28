import React, { useState, useEffect } from 'react';
import './index.css'


const GiftRecommendations = ({ criteria }) => {
  const [recommendations, setRecommendations] = useState('');

  useEffect(() => {
    if (criteria.recipient && criteria.age && criteria.interests) {
      // Fetch recommendations and GPT-3 API interaction
    } else {
      setRecommendations(criteria.recipient || criteria.age || criteria.interests
        ? "Please enter all criteria to get recommendations."
        : "The API key is not integrated. This is just a sample website. When the API key is integrated, the results will be more accurate.");
    }
  }, [criteria]);

  return (
    <div className="gift-recommendations">
      <h2>Gift Recommendations</h2>
      <p>{recommendations}</p>
    </div>
  );
};

export default GiftRecommendations;
