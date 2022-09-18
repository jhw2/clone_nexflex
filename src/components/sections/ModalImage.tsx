import React, { memo, useCallback, useState } from "react";
import { IMovidetail } from "../../Types/MovieTypes";
import { MovieModal } from "../MovieModal";
import { Image } from './Image';

interface IModalImage {
  isLargeRow: boolean;
  movie: IMovidetail;
}
export const ModalImage = memo(({ movie, isLargeRow }: IModalImage) => {
  const imgUrl = isLargeRow ? movie.poster_path : movie.backdrop_path;
  const clss = isLargeRow ? "row__poster row__posterLarge" : "row__poster";
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleClick = useCallback(() => {
    setOpenModal(true);
  }, [setOpenModal]);
  return (
    <>
      <Image
        src={`https://image.tmdb.org/t/p/original/${imgUrl}`}
        clss={clss}
        alt={movie.title ?? movie.name}
        handleClick={handleClick}
      />
      {openModal && <MovieModal {...movie} setOpenModal={setOpenModal} />}
    </>
  );
});
ModalImage.displayName = "ModalImage";
