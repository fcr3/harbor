import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Search from './SearchPage';
import Settings from './SettingsPage';
import {Switch, Route} from 'react-router-dom';

const Switcher = (
  <Switch>
    <Route path="/" component={Dashboard}/>
    <Route path="/search" component={Search}/>
    <Route path="/settings" component={Settings}/>
  </Switch>
);

class Display extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/settings" component={Settings}/>
        </Switch>
      </div>
    );
  }
}

export default Display;