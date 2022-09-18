import React, { memo } from "react";
import { useIsElementInViewport } from "../../hooks/useIsElementInViewport";

interface IImage {
  clss?: string;
  src: string;
  alt: string;
  handleClick?: (e: React.MouseEvent) => void; 
}
export const Image = memo(({ src, alt, clss = '', handleClick }: IImage) => {
  const { isVisible, elementRef } = useIsElementInViewport<HTMLImageElement>();
  return (
    <>
      <img
        className={clss}
        ref={elementRef}
        src={isVisible ? src : ""}
        alt={alt}
        onClick={handleClick}
      />
    </>
  );
});
Image.displayName = "Image";
