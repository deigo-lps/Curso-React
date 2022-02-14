import React from "react";
import Movie from "../Movie/Movie";
import classes from './MovieList.module.scss'
const MoviesList = (props) =>{
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
}

export default MoviesList;