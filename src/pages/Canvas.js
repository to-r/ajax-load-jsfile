import React, { Component } from 'react';

class Canvas extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div id="animation_container" style={{ width: '960px', height: '540px' }}>
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
    );
  }
}

export default Canvas;
