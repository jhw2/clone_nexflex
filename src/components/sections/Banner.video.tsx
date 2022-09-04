import React, { memo } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justifycontent: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #000;
`;
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
export const Banner_video = memo(({ videoKey }: { videoKey: string }) => {
  return (
    <Container>
      <HomeContainer>
        <IFrame
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoKey}?controls=0&autoplay=1&loop=1&mute=1&playlist=${videoKey}`}
          title="YouTube video player"
          allow="autoplay; fullscreen"
        ></IFrame>
      </HomeContainer>
    </Container>
  );
});
Banner_video.displayName = 'Banner_video';

