import React, { memo, useEffect, useRef } from "react";
import { useOnClickOutSide } from "../../hooks/useOnClickOutSide";
import { IMovidetail } from "../../Types/MovieTypes";
import "./MovieModal.css";

interface IMovieModal extends IMovidetail {
  setOpenModal: (openModal: boolean) => void;
}
export const MovieModal = memo(
  ({
    backdrop_path,
    title,
    name,
    overview,
    release_date,
    first_air_date,
    vote_average,
    setOpenModal,
  }: IMovieModal) => {
    const { elementRef: modalRef } = useOnClickOutSide<HTMLDivElement>(() => setOpenModal(false))
    return (
      <div className="presentation">
        <div className="wrapper-modal" ref={modalRef}>
          <div className="modal">
            <span onClick={() => setOpenModal(false)} className="modal-close">
              X
            </span>

            <img
              className="modal__poster-img"
              src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
              alt="modal__poster-img"
            />

            <div className="modal__content">
              <p className="modal__details">
                <span className="modal__user_perc">
                  {release_date ?? first_air_date}
                </span>
              </p>

              <h2 className="modal__title">{title ?? name}</h2>
              <p className="modal__overview"> 평점: {vote_average}</p>
              <p className="modal__overview"> {overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
MovieModal.displayName = "MovieModal";
