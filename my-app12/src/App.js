import React, { useState } from 'react';
import './App.css';
import ValueDisplay from './ValueDisplay';

function App() {
  
  const [value, setValue] = useState('');
  
  const [draft, setDraft] = useState(value);

 
  const handleChange = e => {
    setDraft(e.target.value);
  };

 
  const handleSubmit = e => {
    e.preventDefault();
    setValue(draft);
  };

  return (
    <div className="App">
      <h1>Current and Previous Value</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={draft}
          onChange={handleChange}
          placeholder="Type and press Enter"
        />
      </form>
      
      <ValueDisplay value={value} />
    </div>
  );
}

export default App;

