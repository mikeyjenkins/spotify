import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faChevronLeft,
  faChevronRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import * as api from "../../utils/api";

const TracksList = ({ tracks }) => {
  const ADD_TRACK_URL = "https://api.spotify.com/v1/me/tracks?ids=";
  const [limit, setLimit] = useState([0, 5]);

  const seeNext = () => {
    setLimit([limit[0] + 5, limit[1] + 5]);
  };

  const seeLast = () => {
    setLimit([limit[0] - 5, limit[1] - 5]);
  };

  const addTrack = (trackId) => {
    console.log(trackId);
    api.put(`${ADD_TRACK_URL}${trackId}`).then((res) => {
      console.log(res);
    });
  };

  return (
    <React.Fragment>
      <div className="category-header">
        <h4>Tracks</h4>
      </div>
      {Object.keys(tracks).length > 0 && (
        <div className="albums">
          {limit[0] > 0 && (
            <Link className="next-button-div">
              <FontAwesomeIcon
                onClick={seeLast}
                className="next-button"
                icon={faChevronLeft}
              />{" "}
            </Link>
          )}
          {tracks.items.slice(limit[0], limit[1]).map((track, index) => {
            return (
              <React.Fragment key={index}>
                <Card>
                  <FontAwesomeIcon className="add-track-icn" icon={faPlus} onClick={() => addTrack(track.id)} />
                  
                    {!_.isEmpty(track.album.images) ? (
                      <Card.Img
                        variant="top"
                        src={track.album.images[0].url}
                        alt=""
                      />
                    ) : (
                      <span className="missing_icn">
                        <Card.Img
                          variant="top"
                          src={
                            "https://i.pinimg.com/originals/7a/ec/a5/7aeca525afa2209807c15da821b2f2c6.png"
                          }
                          alt="No Image"
                        />
                      </span>
                    )}
                  
                  <a
                    target="_blank"
                    href={track.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                  <Card.Body>
                    <Card.Title className="truncate">{track.name}</Card.Title>
                    <Card.Text className="truncate">
                      <small>
                        {track.artists.map((artist) => artist.name).join(", ")}
                      </small>
                    </Card.Text>
                  </Card.Body>
                  </a>
                </Card>
              </React.Fragment>
            );
          })}
          {limit[1] < tracks.items.length && (
            <div onClick={seeNext} className="next-button-div">
              <FontAwesomeIcon className="next-button" icon={faChevronRight} />{" "}
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};
export default TracksList;
