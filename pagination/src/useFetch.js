import { useState, useEffect } from 'react';

const url = 'https:/api.github.com/users/john-smilga/followers?per_page=200';

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    getUsers();
  }, []);


  return { loading, data };
};