import React, { useEffect, useState } from "react";
import Card from "../card/Card.js";
import "./movieList.css";
import { useParams } from "react-router-dom"; 

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=${process.env.API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
