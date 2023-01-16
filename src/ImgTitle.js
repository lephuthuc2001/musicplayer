import React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import myImg from "./imgtitle.jpg";
import useMusicPlayer from "./hooks/usePlayerProvider";

function ImgTitle() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <>
      <marquee
        style={{
          fontSize: "1.2rem",
          width: "80%",
          color: "#37b24d",
          textTransform: "capitalize",
        }}
      >
        {currentTrackName ? currentTrackName : "Spotify"}
      </marquee>

      <ImageListItem key={myImg} sx={{ p: "1px" }}>
        <img src={myImg} alt="nature" loading="lazy" />
      </ImageListItem>
    </>
  );
}

export default ImgTitle;
