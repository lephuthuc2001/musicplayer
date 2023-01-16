import React from "react";
import useMusicPlayer from "./hooks/usePlayerProvider";
import { Button, Typography } from "@mui/material";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { Stack } from "@mui/system";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { common } from "@mui/material/colors";
const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  console.log(currentTrackName);
  return (
    <Stack
      sx={{
        width: "500px",
        maxWidth: "100%",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      spacing={1}
    >
      {trackList.map((track, index) => {
        return (
          <Button
            sx={{
              color: "white",
              borderColor: "black",
              "&:hover": {
                borderColor: "green",
              },
              display: "flex",
              justifyContent: "space-between",
              width: "350px",
              maxWidth: "90%",
            }}
            key={Math.random().toString(36).substring(7)}
            variant="outlined"
            startIcon={
              (currentTrackName === track.name) & isPlaying ? (
                <HeadphonesIcon sx={{ color: "#37b24d" }} />
              ) : (
                <PauseCircleOutlineIcon
                  sx={{
                    color:
                      currentTrackName === track.name ? "#37b24d" : "white",
                  }}
                />
              )
            }
            onClick={() => {
              playTrack(index);
            }}
          >
            <Typography
              variant="string"
              sx={{
                flexGrow: "1",
                textAlign: "left",
                color: currentTrackName === track.name ? "#37b24d" : "white",
                textTransform: "capitalize",
              }}
            >
              {" "}
              {track.name}
            </Typography>
          </Button>
        );
      })}
    </Stack>
  );
};

export default TrackList;
