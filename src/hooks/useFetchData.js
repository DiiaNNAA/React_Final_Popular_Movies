import { useState, useEffect } from 'react';

export const useFetchData = (url, accessToken, page = 1) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}&page=${page}`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
          }
        });
        const result = await response.json();
        setData(result.results);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, accessToken, page]);

  return { data, loading, error };
};
