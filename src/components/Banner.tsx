import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { requests } from "../api/request";
import { IMovidetail, IMovieLists_Response } from "../Types/MovieTypes";
import './Banner.css';

const truncate = (str: string, n: number): string => str?.length > n ? str.substr(0, n - 1) + "..." : str;
export const Banner = () => {
  const [nowMovie, setNowMovie] = useState<IMovidetail>();
  useEffect(() => {
    getNowMovie();
  }, []);
  const getNowMovie = async () => {
    const request = await axios.get<IMovieLists_Response>(
      requests.fetchNowPlaying
    );
    const randomNum = Math.floor(Math.random() * request.data.results.length);
    const movieId = request.data.results[randomNum].id;
    getMovieDetail(movieId);
  };
  const getMovieDetail = async (movieId: string) => {
    const { data: movieDetail } = await axios.get(`movie/${movieId}`);
    setNowMovie(movieDetail);
  };
  return !nowMovie ? (
    <></>
  ) : (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${nowMovie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {nowMovie?.title || nowMovie?.original_title}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button info">More Information</button>
        </div>
        <h1 className="banner_description">
          {truncate(nowMovie.overview, 100)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};
