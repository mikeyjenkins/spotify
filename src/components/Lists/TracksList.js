import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';

const TracksList = ({ tracks }) => {
  return (
    <React.Fragment>
      <h4>Tracks</h4>
      {Object.keys(tracks).length > 0 && (
        <div className="albums">
          {tracks.items.slice(0,5).map((track, index) => {
            return (
              <React.Fragment key={index}>
                <Card>
                  <a
                    target="_blank"
                    href={track.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(track.album.images) ? (
                      <Card.Img
                        variant="top"
                        src={track.album.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={'../images/image.jpg'} alt="" />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title className="truncate">{track.name}</Card.Title>
                    <Card.Text className="truncate">
                      <small>
                        {track.artists.map((artist) => artist.name).join(', ')}
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
export default TracksList;