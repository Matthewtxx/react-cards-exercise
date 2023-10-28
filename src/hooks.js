// src/hooks.js

import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxios(baseURL, config = {}) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios({
        ...config,
        url: baseURL + (config.url || ''),
      });
      setData(data => [...data, response.data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [baseURL, config.url]);

  return [data, fetchData];
}

export default useAxios;
