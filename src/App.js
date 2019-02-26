import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Top from './pages/Top';
import Edit from './pages/Edit';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/edit" component={Edit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
