import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

function CatImage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCat = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setUrl(response.data[0].url);
    } catch (error) {
      console.error('Error fetching cat:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Random Cat Image</h2>

      {url && <img src={url} alt="Random Cat" className={styles.image} />}
      
      <button
        className={styles.button}
        onClick={fetchCat}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load New Image'}
      </button>
    </div>
  );
}

export default CatImage;