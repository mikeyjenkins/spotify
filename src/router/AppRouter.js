import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Screens/Home';
import RedirectPage from '../components/RedirectPage';
import Dashboard from '../components/Screens/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import Library from '../components/Screens/Library'
import NavBar from '../components/NavBar'
import Player from '../components/Player'

class AppRouter extends React.Component {
  state = {
    expiryTime: '0'
  };
  componentDidMount() {
    let expiryTime;
    try {
      expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
    } catch (error) {
      expiryTime = '0';
    }
    this.setState({ expiryTime });
  }
  setExpiryTime = (expiryTime) => {
    this.setState({ expiryTime });
  };
  isValidSession = () => {
    const currentTime = new Date().getTime();
    const expiryTime = this.state.expiryTime;
    const isSessionValid = currentTime < expiryTime;

    return isSessionValid;
  };
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/redirect" component={RedirectPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/library" component={Library} />
            <Route path="/player" component={Player} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;