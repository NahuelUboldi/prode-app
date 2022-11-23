import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const response = await fetch(url);
    const info = await response.json();
    setData(info);
  };

  useEffect(() => {
    try {
      setLoading(true);
      fetchData();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url]);
  return { loading, data, error };
}
