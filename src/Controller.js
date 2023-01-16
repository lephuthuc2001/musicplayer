import React from "react";
import useMusicPlayer from "./hooks/usePlayerProvider";
import { Stack, IconButton } from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
function Controller() {
  const { togglePlay, playPreviousTrack, playNextTrack, isPlaying } =
    useMusicPlayer();
  return (
    <Stack direction="row" sx={{ gap: "10px", marginBottom: "5px" }}>
      <IconButton
        sx={{ color: "white" }}
        aria-label="delete"
        onClick={playPreviousTrack}
        size="large"
      >
        <SkipPreviousIcon />
      </IconButton>
      <IconButton
        sx={{
          backgroundColor: "#37b24d",
          "&:hover": {
            backgroundColor: "#37b24d",
          },
        }}
        aria-label="pause"
        onClick={togglePlay}
        size="large"
      >
        {isPlaying ? (
          <PauseIcon sx={{ color: "black" }} />
        ) : (
          <PlayArrowRoundedIcon sx={{ color: "black" }} />
        )}
      </IconButton>
      <IconButton
        sx={{ color: "white" }}
        aria-label="delete"
        onClick={playNextTrack}
        size="large"
      >
        <SkipNextIcon />
      </IconButton>
    </Stack>
  );
}

export default Controller;
