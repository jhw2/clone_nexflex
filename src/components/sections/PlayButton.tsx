import React, { memo, useCallback, useState } from "react";

interface IPlayButton {
  videoKey: string | undefined;
  handleClick: (play: boolean) => void;
}
export const PlayButton = memo(({ videoKey, handleClick }: IPlayButton) => {
  const onClickClicked = useCallback(() => {
    handleClick(true);
  }, [handleClick]);
  return !videoKey ? (
    <></>
  ) : (
    <button className="banner_button play" onClick={onClickClicked}>
      Play
    </button>
  );
});
PlayButton.displayName = "PlayButton";
