import React, { useState } from "react";
import * as api from "../utils/api";
import Search from "./Search";
import SearchContent from "./SearchContent";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState();
  const [tracks, setTracks] = useState();
  const [albums, setAlbums] = useState();
  const [artists, setArtists] = useState();
  const [playlists, setPlaylists] = useState();
  let history = useHistory()

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
      populateData(res.data);
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
          history={history}
        />
      )}
    </div>
  );
};
export default Dashboard;
