import React, { useState } from 'react';
import GiftRecommendations from './components/GiftRecommendations';
import './App.css';

function App() {
  const [criteria, setCriteria] = useState({
    recipient: '',
    age: '',
    interests: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: value,
    }));
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleRecommendations();
    }
  };

  const handleRecommendations = async () => {
    // Clear the input fields
    setCriteria({
      recipient: '',
      age: '',
      interests: '',
    });

    // Set the message in the result field
    setRecommendations("The API key is not integrated. This is just a sample website. When the API key is integrated, the results will be more accurate.");
  };

  const [recommendations, setRecommendations] = useState('');

  return (
    <div className="App">
      <h1>AI Gift Shop Demo</h1>
      <label>
        Recipient:
        <input
          type="text"
          name="recipient"
          value={criteria.recipient}
          onChange={handleInputChange}
          onKeyPress={handleEnterKey}
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          name="age"
          value={criteria.age}
          onChange={handleInputChange}
          onKeyPress={handleEnterKey}
        />
      </label>
      <label>
        Interests:
        <input
          type="text"
          name="interests"
          value={criteria.interests}
          onChange={handleInputChange}
          onKeyPress={handleEnterKey}
        />
      </label>
      <button onClick={handleRecommendations}>Get Recommendations</button>
      <GiftRecommendations criteria={criteria} />
    </div>
  );
}

export default App;
