import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PlayLists = ({ playlists }) => {
  const [limit, setLimit] = useState([0, 5]);

  const seeNext = () => {
    setLimit([limit[0] + 5, limit[1] + 5]);
  };

  const seeLast = () => {
    setLimit([limit[0] - 5, limit[1] - 5]);
  };

  return (
    <React.Fragment>
      <div className="category-header">
        <h4>Playlists</h4>
      </div>
      {Object.keys(playlists).length > 0 && (
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
          {playlists.items.slice(limit[0], limit[1]).map((playlist, index) => {
            return (
              <React.Fragment key={index}>
                <Card>
                  <a
                    target="_blank"
                    href={playlist.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(playlist.images) ? (
                      <Card.Img
                        variant="top"
                        src={playlist.images[0].url}
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
                  </a>
                  <Card.Body>
                    <Card.Title className="truncate">
                      {playlist.name}
                    </Card.Title>
                    <Card.Text>
                      <small className="truncate">
                        {`owner: ${playlist.owner.display_name}`}
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
          {limit[1] < playlists.items.length && (
            <div onClick={seeNext} className="next-button-div">
              <FontAwesomeIcon className="next-button" icon={faChevronRight} />{" "}
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};
export default PlayLists;
