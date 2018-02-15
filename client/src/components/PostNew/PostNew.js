import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import animate from 'gsap-promise';
import { Link, withRouter } from 'react-router-dom';
import TextButton from '../TextButton/TextButton';
import './style.css';

const contentLimit = 500;
class PostNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentLimitMessage: ''
    }
  }
  componentDidMount = () => {
    animate.from(this.component, 1, { autoAlpha: 0, y: '-20px' });
  }
  renderField = (field) => {
    return (
      <div className="form-input">
        <label className="label">{ field.label }</label>
        {
          field.label === 'title'
          ? <input
            className="post-new-textarea title"
            type="text"
            autoFocus
            {...field.input}
          />
          : <textarea
            className="post-new-textarea content"
            type="text"
            {...field.input}
          />
        }
      </div>
    );
  }
  onSubmit = (values) => {
    if (values.content.length >= contentLimit) {
      this.setState({
        contentLimitMessage: `Content cannot be over ${contentLimit} characters`
      });
    } else {
      this.props.createPostRequest(values).then(() => {
        this.props.history.push('/');
      });
    }
  }
  render() {
    const { handleSubmit } = this.props;
    const contentLimitMessage = (
      <div className="error-message">{ this.state.contentLimitMessage }</div>
    );
    return (
      <div id="posts-new" ref={el => this.component = el}>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="content"
            name="content"
            isContents={true}
            component={this.renderField}
          />
          {
            this.state.contentLimitMessage && contentLimitMessage
          }
          <div className="footer">
            <TextButton type="submit" className="btn btn-primary">Submit</TextButton>
            <Link className="btn btn-danger" to="/"><TextButton>Cancel</TextButton></Link>
          </div>
        </form>
      </div>
    );
  }
}
PostNew.defaultProps = {
  post: {},
  form: {},
  fetchPostsRequest: () => { console.warn('fetchPostsRequest is not implemented')},
  deletePostsRequest: () => { console.warn('deletePostsRequest is not implemented')},
  clearPostDetail: () => { console.warn('clearPostDetail is not implemented')},
  updatePost: () => { console.warn('updatePost is not implemented')}
};

PostNew.propTypes = {
  fetchPostsRequest: PropTypes.func,
  deletePostsRequest: PropTypes.func,
  clearPostDetail: PropTypes.func,
  updatePost: PropTypes.func
};
export default withRouter(PostNew);
