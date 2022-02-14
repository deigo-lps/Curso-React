import React,{useState} from 'react';
import MoviesList from './components/Movieslist/MoviesList';
import './style.scss'

function App() {
  const[movies,setMovies] = useState([])

  const fetchMoviesHandler = () =>{
    fetch('https://swapi.dev/api/films').then(response => {
      return response.json();
    }).then(data =>{
      const transformedMovies = data.results.map((movieData)=>{
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      });
      setMovies(transformedMovies);
      console.log(data.results);
    });
  }


  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies}/>
      </section>
    </>
  );
}

export default App;
