import React, { memo } from "react";
import axios from "../api/axios";
import { useAxios } from "../hooks/useAxios";
import { IMovieLists_Response } from "../Types/MovieTypes";
import "./Row.css";
import { Loding } from "./share/Loading";
import { ModalImage } from "./sections/ModalImage";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface IRow {
  title: string;
  id: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}
const breakpoints = {
  1378: {
    slidesPerView: 6,
    slidesPerGroup: 6,
  },
  998: {
    slidesPerView: 5,
    slidesPerGroup: 5,
  },
  625: {
    slidesPerView: 4,
    slidesPerGroup: 4,
  },
  0: {
    slidesPerView: 3,
    slidesPerGroup: 3,
  },
};
export const Row = memo(({ title, id, fetchUrl, isLargeRow }: IRow) => {
  const { isOk, data, isloading, errorMsg } = useAxios<
    IMovieLists_Response,
    any
  >(fetchUrl, {}, axios);
  const movies = data?.results;
  return isloading ? (
    <Loding />
  ) : (
    <>
      <section className="row">
        <h2>{title}</h2>
        <div className="slider">
          <div id={id} className="row__posters"></div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            loop={true}
            breakpoints={breakpoints}
            navigation
            pagination={{ clickable: true }}
          >
            {movies?.map((movie) => (
              <SwiperSlide key={movie.id}>
                <ModalImage
                  movie={movie}
                  isLargeRow={!!isLargeRow}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
});
Row.displayName = "Row";
