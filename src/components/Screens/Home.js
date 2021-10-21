import React from "react";
import { Button } from "react-bootstrap";
import Header from "../Header";

const Home = (props) => {
  let scopes =
    "user-library-read user-library-modify user-read-currently-playing user-modify-playback-state user-top-read user-read-recently-played user-read-recently-played";
  const handleLogin = () => {
    window.location = `${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${
      process.env.REACT_APP_CLIENT_ID
    }&redirect_uri=${
      process.env.REACT_APP_REDIRECT_URL
    }&response_type=token&show_dialog=true&scope=${encodeURIComponent(scopes)}`;
  };

  return (
    <div className="login">
      <div className="main-title">
        <Header />
        <Button
          className="main-button"
          variant="info"
          type="submit"
          onClick={handleLogin}
        >
          Login to spotify
        </Button>
      </div>
    </div>
  );
};
export default Home;
