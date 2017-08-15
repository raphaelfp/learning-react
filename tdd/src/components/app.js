import React, { Component } from 'react';
import CommentBox from '../containers/comment_box'
import CommentList from '../containers/comment_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
