import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import * as api from "../utils/api";
import _ from "lodash";

const FavoriteContent = () => {
  const FAVORITES_API = "https://api.spotify.com/v1/me/top";
  const [tracks, setTracks] = useState();
  const [artists, setArtists] = useState();
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    api.get(`${FAVORITES_API}/tracks?limit=${limit}`).then((res) => {
      setTracks(res.data);
    });
    api.get(`${FAVORITES_API}/artists?limit=${limit}`).then((res) => {
      setArtists(res.data);
    });
  }, [FAVORITES_API]);
  const formatNum = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  //Top Artists and Tracks
  return (
    <React.Fragment>
      {tracks && artists && (
        <div className="content-container">
          <div className="category-header">
            <h4>Your Top Tracks</h4>
          </div>
          {tracks.items.map((track, index) => {
            return (
              <React.Fragment key={index}>
                <Card>
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
                          {track.artists
                            .map((artist) => artist.name)
                            .join(", ")}
                        </small>
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Card>
              </React.Fragment>
            );
          })}

          <div className="category-header">
            <h4>Your Top Artists</h4>
          </div>

          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                <Card>
                  <a
                    target="_blank"
                    href={artist.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(artist.images) ? (
                      <Card.Img
                        variant="top"
                        src={artist.images[0].url}
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
                    <Card.Title className="truncate">{artist.name}</Card.Title>
                    <Card.Text className="truncate">
                      <small>
                        {`Followers: ${formatNum(artist.followers.total)}`}
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default FavoriteContent;
