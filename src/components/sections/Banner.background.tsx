import React, { memo } from "react";
interface IBanner_background {
  children?: JSX.Element | JSX.Element[];
  imgUrl: string;
}
export const Banner_background = memo(
  ({ children, imgUrl }: IBanner_background) => {
    return (
      <div
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${imgUrl}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        {children}
      </div>
    );
  }
);
Banner_background.displayName = "Banner_background";
