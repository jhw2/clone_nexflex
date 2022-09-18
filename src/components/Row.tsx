import React, { memo, useCallback } from "react";
import axios from "../api/axios";
import { useAxios } from "../hooks/useAxios";
import { IMovieLists_Response } from "../Types/MovieTypes";
import "./Row.css";
import { Loding } from "./share/Loading";
import { ModalImage } from './sections/ModalImage';

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
  const slideGoLeft = useCallback(() => {
    const scrollContainer = document.getElementById(id);
    if (scrollContainer) scrollContainer.scrollLeft -= window.innerWidth;
  }, []);
  const slideGoRight = useCallback(() => {
    const scrollContainer = document.getElementById(id);
    if (scrollContainer) scrollContainer.scrollLeft += window.innerWidth;
  }, []);
  return isloading ? (
    <Loding />
  ) : (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left" onClick={slideGoLeft}>
          <span className="arrow">&lt;</span>
        </div>
        <div id={id} className="row__posters">
          {movies?.map((movie) => <ModalImage key={movie.id} movie={movie} isLargeRow={!!isLargeRow} />)}
        </div>
        <div className="slider__arrow-right" onClick={slideGoRight}>
          <span className="arrow">&gt;</span>
        </div>
      </div>
    </section>
  );
});
Row.displayName = "Row";
