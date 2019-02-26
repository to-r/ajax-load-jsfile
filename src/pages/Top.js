import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Top extends Component {
  render() {
    const { select, onSelect } = this.props;

    return (
      <div>
        <h1>Top page</h1>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="1"
                checked={select === '1'}
                onChange={onSelect('1')}
              />{' '}
              アニメーション1
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="2"
                checked={select === '2'}
                onChange={onSelect('2')}
              />{' '}
              アニメーション2
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                value="3"
                checked={select === '3'}
                onChange={onSelect('3')}
              />{' '}
              アニメーション3
            </label>
          </li>
        </ul>
        <p>
          <Link to="/edit">Edit Page</Link>
        </p>
      </div>
    );
  }
}

export default Top;
