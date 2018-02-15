import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group-plus';
import Post from './Post/Post';
import './style.css';

class Posts extends Component {
  renderPost = (posts) => {
    return posts.map((post, i) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          id={post.id}
        />
      );
    })
  }
  render() {
    return (
      <div id="posts">
        <ul>
          <TransitionGroup>
            {
              this.renderPost(this.props.posts)
            }
          </TransitionGroup>
        </ul>
      </div>
    );
  }
}
Posts.defaultProps = {
  posts: []
};

Posts.propTypes = {
  posts: PropTypes.array
};
export default Posts;
