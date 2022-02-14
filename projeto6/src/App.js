import React, { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/Movieslist/MoviesList";
import "./style.scss";
import loading from "./components/img/loading.svg";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setisLoading(true);
    setError(null);
    try{
      const response = await fetch("https://swapi.dev/api/films");
      if(!response.ok){
        throw new Error('Something went wrong.');
      }
      const data = await response.json();
  
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      console.log(data.results);
    } catch (error) {
      setError(error.message);
    }
    setisLoading(false);
  },[]);

  useEffect(()=>{
    fetchMoviesHandler();
  },[])

  let content = <p style={{color: "white",fontSize: "1.5rem"}}>No movies were found.</p>

  if (movies.length > 0){
    content = <MoviesList movies={movies} />
  }

  else if(error){
    content = <p style={{color: "white",fontSize: "1.5rem"}}>{error}</p>
  }

  return (
    <>
      <section class="main">
        {!isLoading ? (
          <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        ) : (
          <img class="loading" src={loading}></img>
        )}
      </section>
      <section>
        {content}
      </section>
    </>
  );
}

export default App;
