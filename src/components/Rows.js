import React, { useEffect, useState } from 'react';
import axios from '../axios/axios';
import '../css/Row.css'
function Rows({ title, fetchURL, isLargeRow}) {
  const [movies, setMovies] = useState([]);



  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchURL);
        setMovies(request.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [fetchURL]);

  const baseURL = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className=" row_posters   ">
      
      {movies.map((item) => (
         <img
         className={`  ${isLargeRow ? 'row_posterLarge  ' : 'row_poster   '} `}
         key={item.id}
         src={`${baseURL}${isLargeRow ? item.poster_path : item.backdrop_path}`}
         alt={item.name || item.title}
        />
        
      ))}
    </div>
  );
}

export default Rows;
