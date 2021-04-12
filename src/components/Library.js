import React, { useEffect, useState } from "react";
import * as api from "../utils/api";
import { Table, ProgressBar } from "react-bootstrap";
import _ from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";

const Library = (props) => {
  let allTracks;
  const [tracks, setTracks] = useState();
  const API_SEARCH_URL = `https://api.spotify.com/v1/me/tracks`;

  const populateData = (data) => {
    setTracks(data);
  };

  const showmore = (url) => {
    api.get(url).then((res) => {
      res.items = tracks.items.concat(res.items);
      setTracks(res);
    });
  };

  const isLastArrItem = (item, arr) => {
    if (arr[arr.length - 1] === item) {
      return true;
    } else {
      return false;
    }
  };

  const formatDurationToMinutes = (ms) => {
    var d = new Date(1000*Math.round(ms/1000)); // round to nearest second
    function pad(i) { return ('0'+i).slice(-2); }
    var str = pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds());
    return str
  };

  useEffect(() => {
    api.get(API_SEARCH_URL).then((res) => {
      populateData(res);
    });
  }, [API_SEARCH_URL]);

  return (
    <React.Fragment>
      <div className="library-title">
        <h4>Saved Tracks</h4>
      </div>

      {tracks && (
        <InfiniteScroll
          dataLength={tracks.items.length} //This is important field to render the next data
          next={() => showmore(tracks.next)}
          hasMore={tracks.next != null}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {tracks && (
            <div className="tracks-table">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Duration</th>
                    <th>Popularity</th>
                  </tr>
                </thead>
                <tbody>
                  {tracks.items.map((track) => {
                    return (
                      <>
                        <tr>
                          {!_.isEmpty(track.track.album.images) ? (
                            <img
                              variant="top"
                              src={track.track.album.images[0].url}
                              alt=""
                              height="40px"
                              width="40px"
                            />
                          ) : (
                            <span className="missing_icn">
                              <img
                                variant="top"
                                src={
                                  "https://i.pinimg.com/originals/7a/ec/a5/7aeca525afa2209807c15da821b2f2c6.png"
                                }
                                alt="No Image"
                              />
                            </span>
                          )}
                          <td>{track.track.name}</td>
                          <td>
                            {track.track.artists.map((artist) => {
                              if (!isLastArrItem(artist, track.track.artists))
                                return `${artist.name}, `;
                              else return `${artist.name}`;
                            })}
                          </td>
                          <td>
                            {formatDurationToMinutes(track.track.duration_ms)}
                          </td>
                          <td>
                            <ProgressBar now={track.track.popularity} />
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          )}
        </InfiniteScroll>
      )}
    </React.Fragment>
  );
};

export default Library;
