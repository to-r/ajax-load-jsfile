import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Top from './pages/Top';
import Edit from './pages/Edit';

class App extends Component {
  state = {
    select: '1',
    files: {
      '1': [
        '/canvas/json/anim-1.js',
        '/canvas/js/mask/mask-pattern1.js',
        '/canvas/js/text/pattern165.js',
        '/canvas/js/text/pattern182.js'
      ],
      '2': [
        '/canvas/json/anim-2.js',
        '/canvas/js/mask/mask-pattern1.js',
        '/canvas/js/text/pattern165.js',
        '/canvas/js/text/pattern182.js'
      ],
      '3': [
        '/canvas/json/anim-3.js',
        '/canvas/js/mask/mask-pattern1.js',
        '/canvas/js/text/pattern165.js',
        '/canvas/js/text/pattern182.js'
      ]
    }
  };

  handleSelect = n => () => {
    this.setState({ select: n });
  };

  render() {
    const { select, files } = this.state;

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Top select={select} onSelect={this.handleSelect} />
              )}
            />
            <Route
              exact
              path="/edit"
              render={() => <Edit files={files[select]} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
