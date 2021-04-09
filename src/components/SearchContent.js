import React from "react";
import { Container } from "react-bootstrap";
import AlbumsList from "./AlbumsList";

const SearchContent = ({ albums, artists, playlists, tracks }) => {
  return (
    <React.Fragment>
      <Container>
        {albums && <AlbumsList albums={albums} />}
        {/*tracks && <TrackList tracks={tracks} />*/}
        <div>{/*artists && <AlbumsList albums={albums} />*/}</div>
        <div>{/*playlists && <AlbumsList albums={albums} />*/}</div>
        <div>{/*tracks && <AlbumsList albums={albums} />*/}</div>
      </Container>
    </React.Fragment>
  );
};
export default SearchContent;
