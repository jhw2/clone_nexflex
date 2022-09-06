import React, { memo } from "react";
import axios from "../api/axios";
import { useAxios } from "../hooks/useAxios";
import { IMovieLists_Response } from "../Types/MovieTypes";
import "./Row.css";
import { Loding } from "./share/Loading";

interface IRow {
  title: string;
  id: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}
export const Row = memo(({ title, id, fetchUrl, isLargeRow }: IRow) => {
  const { isOk, data, isloading, errorMsg } = useAxios<
    IMovieLists_Response,
    any
  >(fetchUrl, {}, axios);
  const movies = data?.results;
  return isloading ? (
    <Loding />
  ) : (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow">&lt;</span>
        </div>
        <div id={id} className="row__posters">
          {movies?.map((movie) => {
            const imgUrl = isLargeRow ? movie.poster_path : movie.backdrop_path;
            const clss = isLargeRow
              ? "row__poster row__posterLarge"
              : "row__poster";
            return (
              <img
                key={movie.id}
                className={clss}
                src={`https://image.tmdb.org/t/p/original/${imgUrl}`}
                data-large={isLargeRow}
                alt={movie.title}
                loading="lazy"
              />
            );
          })}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow">&gt;</span>
        </div>
      </div>
    </section>
  );
});
Row.displayName = 'Row';
