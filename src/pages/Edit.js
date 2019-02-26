import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadExternalScript from '../LoadExternalScript';

class Edit extends Component {
  state = {
    scriptsLoaded: false,
    readyCanvas: false,
    loading: false
  };

  componentDidMount() {
    console.log('did mount');
  }

  async componentDidUpdate() {
    if (
      this.state.scriptsLoaded &&
      !this.state.readyCanvas &&
      !this.state.loading
    ) {
      this.setState({ readyCanvas: true });
      const { VB, animationData } = window;
      VB.StageWidth = 1920;
      VB.StageHeight = 1080;
      VB.FPS = 30;
      const player = new VB.Player(animationData);
      player.load();
    }
  }

  render() {
    return (
      <div>
        <LoadExternalScript
          srcs={[
            '/canvas/json/anim-1.js',
            '/canvas/js/mask/mask-pattern1.js',
            '/canvas/js/text/pattern165.js',
            '/canvas/js/text/pattern182.js'
          ]}
          onLoad={() => {
            this.setState({ scriptsLoaded: true });
          }}
        />
        <h1>Edit page</h1>
        <p>
          <Link to="/">Top Page</Link>
        </p>
        <div
          id="animation_container"
          style={{ width: '960px', height: '540px' }}
        >
          <canvas
            id="canvas"
            width="1920"
            height="1080"
            style={{
              position: 'absolue',
              display: 'block',
              width: '960px',
              height: '540px'
            }}
          />
          <div
            id="dom_overlay_container"
            style={{
              pointerEvents: 'none',
              overflow: 'hidden',
              width: '550px',
              height: '400px',
              position: 'absolute',
              left: 0,
              top: 0
            }}
          />
        </div>
      </div>
    );
  }
}

export default Edit;
