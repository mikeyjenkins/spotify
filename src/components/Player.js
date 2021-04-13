import React, { useEffect, useState } from "react";
import * as api from "../utils/api";
import {
  faForward,
  faBackward,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Player = () => {
  const API_PLAYING_URL =
    "https://api.spotify.com/v1/me/player/currently-playing";

  const API_NEXT_TRACK = "https://api.spotify.com/v1/me/player/next";
  const API_PREV_TRACK = "https://api.spotify.com/v1/me/player/previous";
  const API_PLAY_TRACK = " https://api.spotify.com/v1/me/player/play";
  const API_PAUSE_TRACK = " https://api.spotify.com/v1/me/player/pause";
  const [track, setTrack] = useState();

  const nextTrack = () => {
    api.post(API_NEXT_TRACK).then((res) => {
      getCurrentTrack();
    });
  };

  const prevTrack = () => {
    api.post(API_PREV_TRACK).then((res) => {
      getCurrentTrack();
    });
  };

  const playTrack = () => {
    api.put(API_PLAY_TRACK).then((res) => {
      getCurrentTrack();
    });
  };

  const pauseTrack = () => {
    api.put(API_PAUSE_TRACK).then((res) => {
      getCurrentTrack();
    });
  };

  const renderPlayPauseBtn = () => {
    if (track && !track.is_playing) {
      return (
        <FontAwesomeIcon
          className="play-track-icn"
          icon={faPlay}
          onClick={() => playTrack()}
        />
      );
    } else if (track) {
      return (
        <FontAwesomeIcon
          className="play-track-icn"
          icon={faPause}
          onClick={() => pauseTrack()}
        />
      );
    }
  };

  const getCurrentTrack = () => {
    api.get(API_PLAYING_URL).then((res) => {
      setTrack(res.data);
    });
  };

  useEffect(() => {
    getCurrentTrack();
  }, [API_PLAYING_URL]);

  if (track) {
    return (
      <>
        {track && (
          <div className="current-song-wrapper">
            <div className="current-song-title">
              <h3>{track.item.name}</h3>
              <h5>{track.item.album.name}</h5>
            </div>
            <img
              className="current-song-img"
              src={track.item.album.images[0].url}
            />
            <div className="track-control-btns">
              <FontAwesomeIcon
                className="prev-track-arrow"
                icon={faBackward}
                onClick={() => prevTrack()}
              />
              {renderPlayPauseBtn()}
              <FontAwesomeIcon
                className="next-track-arrow"
                icon={faForward}
                onClick={() => nextTrack()}
              />
            </div>
            <div />
          </div>
        )}
      </>
    );
  } else {
    return (
      <div className="play-first-wrapper">
        <h2>Open Spotify and start playing a song to activate player...</h2>
      </div>
    );
  }
};

export default Player;
