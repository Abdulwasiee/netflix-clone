import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import movieUrls from "../../utils/requist";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(movieUrls.urls.scienceFiction);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (err) {
        console.error("Error fetching movie data:", err);
      }
    };
    fetchData();
  }, []);
 
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`, // Fixed URL syntax
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{movie?.title}</h1>
        <div className="banner_buttons">
          <button className="play">Play</button>
          <button className="myList">My List</button>
        </div>
        <p className="banner_description">
          {movie?.overview?.substring(0, 150)}
          {movie?.overview?.length > 150 ? "..." : ""}
        </p>
      </div>
    </div>
  );
}

export default Banner;
