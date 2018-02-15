import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import animate from 'gsap-promise';
import './style.css';

class Post extends Component {
  componentDidMount = () => {
    animate.set(this.component, { autoAlpha: 0, y: '-20px' });
  }
  componentWillEnter = (cb) => {
    this.animateIn().then(cb);
  }
  componentWillAppear = (cb) => {
    this.animateIn().then(cb);
  }
  animateIn = () => {
    return animate.to(this.component, 1, { autoAlpha: 1, y: '0px' });
  }
  render() {
    const { title, id } = this.props;
    return (
      <li className="post" ref={el => this.component = el}>
        <Link to={`/posts/${id}`}><div className="title">{ title }</div></Link>
      </li>
    );
  }
}
Post.defaultProps = {
  title: 'title',
  id: 0
};

Post.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number
};
export default Post;
