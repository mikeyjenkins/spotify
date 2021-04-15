import React, { useEffect, useState } from "react";
import * as api from '../utils/api'
import {Card} from 'react-bootstrap'
import _ from "lodash";


const RecentlyPlayed = () => {
    const RECENTLY_PLAYED_URL = "https://api.spotify.com/v1/me/player/recently-played";
    const [limit, setLimit] = useState(12);
    const [tracks, setTracks] = useState();

    useEffect(() => {
        api.get(`${RECENTLY_PLAYED_URL}?limit=${limit}`).then((res) => {
          setTracks(res.data);
        });

      }, [RECENTLY_PLAYED_URL]);

      console.log(tracks)
    return (
        <React.Fragment>
      {tracks && (
        <div className="content-container-recent-tracks">
          <div className="category-header">
            <h4>Recently Played</h4>
          </div>
          {tracks.items.map((track, index) => {
            return (
              <React.Fragment key={index}>
                <Card>
                  {!_.isEmpty(track.track.album.images) ? (
                    <Card.Img
                      variant="top"
                      src={track.track.album.images[0].url}
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
                    href={track.track.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    <Card.Body>
                      <Card.Title className="truncate">{track.name}</Card.Title>
                      <Card.Text className="truncate">
                        <small>
                          {track.track.artists
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
        </div>
      )}
    </React.Fragment>
    )
}

export default RecentlyPlayed