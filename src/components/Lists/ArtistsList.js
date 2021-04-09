import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';

const TracksList = ({ artists }) => {
  return (
    <React.Fragment>
      <h4>Artists</h4>
      {Object.keys(artists).length > 0 && (
        <div className="albums">
          {artists.items.slice(0,5).map((artist, index) => {
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
                      <img src={'../images/image.jpg'} alt="" />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title className="truncate">{artist.name}</Card.Title>
                    <Card.Text className="truncate">
                      <small>
                        {`followers: ${artist.followers.total}`}
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