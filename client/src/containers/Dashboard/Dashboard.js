import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextButton from '../../components/TextButton/TextButton';
import Posts from '../../components/Posts';
import Loader from '../../components/Loader/Loader';
import './style.css';

class Dashboard extends Component {
  componentDidMount = () => {
    if (!this.props.posts.data.length) { // it does not fetch the data if there are post data in redux store already.
      this.props.fetchPostsRequest();
    }
  }
  render() {
    return (
      <div id="dashboard">
        <h3 className="header">Blogs</h3>
        {
          this.props.posts.status === 'WAITING'
          && <Loader />
        }
        {
          this.props.posts.status === 'SUCCESS'
          && <Posts posts={this.props.posts.data} />

        }
        <Link to="/posts/new" className="btn-new">
          <TextButton>
            New
          </TextButton>
        </Link>
      </div>
    );
  }
}
Dashboard.defaultProps = {
  posts: {},
  fetchPostsRequest: () => console.warn('fetchPostsRequest is not emplemented')
};

Dashboard.propTypes = {
  posts: PropTypes.object,
  fetchPostsRequest: PropTypes.func
};
export default Dashboard;
