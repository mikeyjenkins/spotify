import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
//import music from '../images/image.jpg';
const AlbumsList = ({ albums }) => {
  return (
    <React.Fragment>
      <h4>Albums</h4>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.slice(0,5).map((album, index) => {
            return (
              <React.Fragment key={index}>
                <Card>
                  <a
                    target="_blank"
                    href={album.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(album.images) ? (
                      <Card.Img
                        variant="top"
                        src={album.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={'../images/image.jpg'} alt="" />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title className="truncate">{album.name}</Card.Title>
                    <Card.Text className="truncate">
                      <small>
                        {album.artists.map((artist) => artist.name).join(', ')}
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
export default AlbumsList;