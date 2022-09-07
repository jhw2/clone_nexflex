import React from "react";
import axios from "../api/axios";
import { requests } from "../api/request";
import { useAxios } from "../hooks/useAxios";
import { IMovieLists_Response } from "../Types/MovieTypes";
import "./Banner.css";
import { Banner_content } from "./sections/Banner.content";

export const Banner = () => {
  const { data: movieList, isOk } = useAxios<IMovieLists_Response, {}>(
    requests.fetchNowPlaying,
    {},
    axios
  );
  const randomNum = !movieList
    ? 0
    : Math.floor(Math.random() * movieList?.results.length);
  const movieId = !movieList ? "" : movieList?.results[randomNum]?.id;

  return (
    <header className="banner">{isOk && movieList && <Banner_content movieId={movieId} />}</header>
  );
};
