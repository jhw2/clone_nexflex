import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useAxios } from "../../hooks/useAxios";
import { Error } from "../../components/share/Error";
import "./SearchPage.css";
import { IMovidetail, IMovieLists_Response } from "../../Types/MovieTypes";
import { useDebounce } from "../../hooks/useDebounce";

export const SearchPage = () => {
  const navigate = useNavigate();
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const searchTerm = useDebounce(query.get("q") ?? '', 500);
  const {
    isloading,
    data,
    errorMsg,
  } = useAxios<IMovieLists_Response, null>(
    `/search/multi?include_adult=false&query=${searchTerm}`,
    {},
    axios
  );
  const searchResults = data?.results;
  return errorMsg ? (
    <Error msg={errorMsg} />
  ) : searchResults && searchResults?.length > 0 ? (
    <section className="search-container">
      {searchResults?.map((movie) => {
        if (movie.backdrop_path !== null && movie.media_type !== "person") {
          const movieImageUrl =
            "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
          return (
            <div className="movie" key={movie.id}>
              <div
                onClick={() => navigate(`/${movie.id}`)}
                className="movie__column-poster"
              >
                <img
                  src={movieImageUrl}
                  alt="movie"
                  className="movie__poster"
                />
              </div>
            </div>
          );
        }
      })}
    </section>
  ) : (
    <section className="no-results">
      <div className="no-results__text">
        <p>찾고자하는 검색어에 맞는 영화가 없습니다.</p>
      </div>
    </section>
  );
};
