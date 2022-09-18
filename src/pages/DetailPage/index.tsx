import React from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import { useAxios } from "../../hooks/useAxios";
import { IMovidetail } from "../../Types/MovieTypes";
import { Image } from "../../components/sections/Image";

export const DetailPage = () => {
  const { movieId } = useParams();

  const { isOk, data: movie } = useAxios<IMovidetail, null>(
    `movie/${movieId}`,
    {},
    axios
  );
  return !movie ? (
    <div></div>
  ) : (
    <section>
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        clss={"movie__poster"}
        alt={movie.title ?? movie.name}
      />
    </section>
  );
};
