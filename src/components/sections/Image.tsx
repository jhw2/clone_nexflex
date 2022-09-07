import React, { memo } from "react";
import { useIsElementInViewport } from "../../hooks/useIsElementInViewport";
import { IMovidetail } from "../../Types/MovieTypes";

interface IImage {
  isLargeRow: boolean;
  movie: IMovidetail;
}
export const Image = memo(({ movie, isLargeRow }: IImage) => {
  const imgUrl = isLargeRow ? movie.poster_path : movie.backdrop_path;
  const clss = isLargeRow ? "row__poster row__posterLarge" : "row__poster";

  const { isVisible, elementRef } = useIsElementInViewport<HTMLImageElement>();
  return (
    <img
      className={clss}
      ref={elementRef}
      src={isVisible ? `https://image.tmdb.org/t/p/original/${imgUrl}` : ""}
      data-large={isLargeRow}
      alt={movie.title}
      loading="lazy"
    />
  );
});
Image.displayName = "Image";
