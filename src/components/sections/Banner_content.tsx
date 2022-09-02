import React from "react";
import axios from "../../api/axios";
import { useAxios } from "../../hooks/useAxios";
import { IMovidetail } from "../../Types/MovieTypes";
import { Loding } from "../share/Loading";

const truncate = (str: string | undefined, n: number): string => {
  if (!str) return "";
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

export const Banner_content = ({ movieId }: { movieId: string }) => {
  const {
    data: nowMovie,
    isloading,
    isOk,
    errorMsg,
  } = useAxios<IMovidetail>(`movie/${movieId}`, axios);
  return isloading ? (
    <Loding />
  ) : (
    <>
      {isOk && (
        <div
          className="banner"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${nowMovie?.backdrop_path}")`,
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
              {truncate(nowMovie?.overview, 100)}
            </h1>
          </div>
          <div className="banner--fadeBottom"></div>
        </div>
      )}
    </>
  );
};
