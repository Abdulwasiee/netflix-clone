import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(props.fetchUrl);
        setMovies(request.data.results);
      } catch (err) {
        console.error("Error fetching movie data:", err);
      }
    };
    fetchData();
  }, [props.fetchUrl]);

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="row_Poster">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
