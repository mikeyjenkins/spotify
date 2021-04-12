import React from "react";
import { Container } from "react-bootstrap";
import AlbumsList from "./Lists/AlbumsList";
import TracksList from "./Lists/TracksList";
import ArtistsList from "./Lists/ArtistsList";
import PlayLists from "./Lists/PlayLists"

const SearchContent = ({ albums, artists, playlists, tracks }) => {
  return (
    <React.Fragment>
      <div className='content-container'>
        {tracks && <TracksList tracks={tracks} />}
        {artists && <ArtistsList artists={artists} />}
        {albums && <AlbumsList albums={albums} />}
        {playlists && <PlayLists playlists={playlists} />}
      </div>
    </React.Fragment>
  );
};
export default SearchContent;
