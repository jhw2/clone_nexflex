import React, { useState } from "react";
import axios from "../../api/axios";
import { useAxios } from "../../hooks/useAxios";
import { IMovidetail } from "../../Types/MovieTypes";
import { PlayButton } from "./PlayButton";
import { Banner_background } from "./Banner.background";
import { Banner_description } from "./Banner.discreption";
import { Banner_video } from "./Banner.video";
import { Title } from "./Title";

export const Banner_content = ({ movieId }: { movieId: string }) => {
  const {
    data: nowMovie,
    isloading,
    isOk,
    errorMsg,
  } = useAxios<IMovidetail, { append_to_response: string }>(
    `movie/${movieId}`,
    { append_to_response: "videos" },
    axios
  );
  const videoKey = nowMovie?.videos?.results[0]?.key;
  const [isClicked, setClicked] = useState(false);
  const handleClick = (play: boolean) => {
    setClicked(play);
  };
  return !isClicked ? (
    <>
      {nowMovie && isOk && (
        <Banner_background imgUrl={nowMovie.backdrop_path}>
          <div className="banner_contents">
            <Title classNames="banner_title">
              {nowMovie.title || nowMovie.original_title}
            </Title>
            <div className="banner_buttons">
              <PlayButton videoKey={videoKey} handleClick={handleClick} />
              <button className="banner_button info">More Information</button>
            </div>
            <Banner_description overview={nowMovie.overview} />
          </div>
          <div className="banner--fadeBottom"></div>
        </Banner_background>
      )}
    </>
  ) : (
    <Banner_video videoKey={videoKey ? videoKey : ''} />
  );
};
