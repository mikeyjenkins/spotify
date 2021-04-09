import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';

const PlayLists = ({ playlists }) => {
  return (
    <React.Fragment>
      <h4>Playlists</h4>
      {Object.keys(playlists).length > 0 && (
        <div className="albums">
          {playlists.items.slice(0,5).map((playlist, index) => {
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
                      <img src={'../images/image.jpg'} alt="" />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title className="truncate">{playlist.name}</Card.Title>
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
        </div>
      )}
    </React.Fragment>
  );
};
export default PlayLists;