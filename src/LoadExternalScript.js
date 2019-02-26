import React, { Component, Fragment } from 'react';

export default class LoadExternalScript extends Component {
  static defaultProps = {
    onLoad: () => {},
    onError: () => {}
  };

  constructor(props) {
    super(props);
    this.scriptIds = [];
  }

  loadScript = (src, id) => {
    return new Promise((resolve, reject) => {
      if (!document.getElementById(id)) {
        this.scriptIds.push(id);
        const script = document.createElement('script');
        script.id = id;
        script.src = src;
        script.onload = () => {
          resolve('success');
        };
        script.onerror = () => {
          reject('error');
        };
        document.body.appendChild(script);
      } else {
        reject('error');
      }
    });
  };

  componentWillUnmount() {
    this.scriptIds.forEach(id => {
      const script = document.getElementById(id);
      if (script) {
        document.body.removeChild(script);
      }
    });
  }

  async componentDidMount() {
    const { props } = this;
    const promises = [];
    props.srcs.forEach((src, idx) => {
      const scriptId = `canvas-js-${idx}`;
      promises.push(this.loadScript(src, scriptId));
    });
    const responses = await Promise.all(promises).catch(error => {
      console.log(error);
    });
    if (responses) {
      props.onLoad();
    }
  }

  render() {
    return <Fragment />;
  }
}
