import React, { useState } from "react";
import * as api from "../utils/api";
import Search from "./Search";
import SearchContent from "./SearchContent";

const Dashboard = () => {
  const [data, setData] = useState();
  const [tracks, setTracks] = useState();
  const [albums, setAlbums] = useState();
  const [artists, setArtists] = useState();
  const [playlists, setPlaylists] = useState();

  const populateData = (data) => {
    setData(data);
    setAlbums(data["albums"]);
    setArtists(data["artists"]);
    setPlaylists(data["playlists"]);
    setTracks(data["tracks"]);
  };

  const handleSearch = (searchTerm) => {
    const API_SEARCH_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
      searchTerm
    )}&type=album,playlist,artist,track`;

    api.get(API_SEARCH_URL).then((res) => {
      populateData(res);
    });
  };

  return (
    <div className="dashboard-page">
      <Search handleSearch={handleSearch} />
      {data && tracks && albums && artists && playlists && (
        <SearchContent
          artists={artists}
          albums={albums}
          playlists={playlists}
          tracks={tracks}
        />
      )}
    </div>
  );
};
export default Dashboard;
