import React, { useState } from "react";
import MoviesList from "./components/Movieslist/MoviesList";
import "./style.scss";
import loading from "./components/img/loading.svg";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  async function fetchMoviesHandler() {
    setisLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
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
    setisLoading(false);
    console.log(data.results);
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
        {
          movies.length === 0 ?
          <p style={{color: "white",fontSize: "1.5rem"}}>No movies were found.</p>
          :
          <MoviesList movies={movies} />
        }
      </section>
    </>
  );
}

export default App;
