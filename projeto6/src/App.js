import React, { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/Movieslist/MoviesList";
import "./style.scss";
import loading from "./components/img/loading.svg";
import Form from "./components/Form/Form";
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setisLoading(true);
    setError(null);
    try{
      const response = await fetch("https://curso-react-f70ea-default-rtdb.firebaseio.com/movies.json");
      if(!response.ok){
        throw new Error('Something went wrong.');
      }
      const data = await response.json();
      
      console.log(data);
      const loadedMovies = [];

      for(const key in data) {
        loadedMovies.push({
          id:key,
          title:data[key].title,
          openingText:data[key].openingText,
          releaseDate:data[key].releaseDate
        })
      }
      setMovies(loadedMovies);
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

  const handleSubmit = async (movie) =>{
    const response = await fetch('https://curso-react-f70ea-default-rtdb.firebaseio.com/movies.json',{
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
  }


  return (
    <>
      <section>
        <Form handleSubmit={handleSubmit}></Form>
      </section>
      <section>
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
