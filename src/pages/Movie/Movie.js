import React, { useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { color, motion } from 'framer-motion';
import './Movie.scss';

// const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US';
const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US'
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTdmY2E2ZWM2Zjc3YWE0YWE4Mzg0ZjM5MjAxYmNlZCIsIm5iZiI6MTcxOTMxNzk0Ni45MDg3NDgsInN1YiI6IjY2N2FhZjk4MjExNDQ2ZjU0NDU2N2Q1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kME6EOgVPC4gVuWlPwy4_hCUC2gptbgrLzk5r0A9DpI';

const Movie = () => {
  const [page, setPage] = useState(1);
  const { data: movies, loading, error } = useFetchData(url, accessToken, page);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies.</p>;

  if (!movies || movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <motion.div 
      className="gallery-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Popular Movies</h1>
      <div className="gallery-grid">
        {movies.map((movie) => (
          <motion.div 
            key={movie.id} 
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </motion.div>
        ))}
      </div>
    

    <div className="pagination">
      <button 
        onClick={handlePrevPage} 
        disabled={page === 1} 
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        Previous
      </button>
      <span>Page {page}</span>
      <button 
        onClick={handleNextPage} 
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        Next
      </button>
    </div>

    </motion.div>
  );
};

export default Movie;
