import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Canvas from './Canvas';
import LoadExternalScript from '../LoadExternalScript';

class Edit extends Component {
  state = {
    scriptsLoaded: false,
    readyCanvas: false,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
  }

  async componentDidUpdate() {
    if (this.state.scriptsLoaded && !this.state.readyCanvas) {
      this.setState({ loading: false, readyCanvas: true });
      const { VB, animationData } = window;
      VB.StageWidth = 1920;
      VB.StageHeight = 1080;
      VB.FPS = 30;
      const player = new VB.Player(animationData);
      player.load();
    }
  }

  render() {
    const { files, loading } = this.props;

    if (loading) {
      return <p>スクリプトファイルをローディング中...</p>;
    }

    return (
      <div>
        <LoadExternalScript
          srcs={files}
          onLoad={() => {
            this.setState({ scriptsLoaded: true });
          }}
        />
        <h1>Edit page</h1>
        <p>
          <Link to="/">Top Page</Link>
        </p>
        <Canvas />
      </div>
    );
  }
}

export default Edit;
