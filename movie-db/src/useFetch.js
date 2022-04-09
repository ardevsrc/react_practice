import React, { useState, useEffect } from 'react';
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: ''});
  const [data, setData] = useState(data);

  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const responce = await fetch(url);
      const data = await responce.json();

      if (data.Response === 'True') {
        setData(data.Search || data);
        setError({ show: false, msg: ''});
      }
      else {
        setError({ show: true, msg: data.Error });
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, data };
}

export default useFetch;