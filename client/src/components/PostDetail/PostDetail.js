import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import animate from 'gsap-promise';
import Loader from '../Loader/Loader';
import TextButton from '../TextButton/TextButton';

import './style.css';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditView: false
    };
  }
  componentWillMount = () => {
    if(typeof this.props.form === 'string' | !this.props.post) {
      this.props.fetchPostsRequest().then(() => this.initializeData());
    } else {
      this.initializeData();
    }
  }
  componentDidMount = () => {
    animate.from(this.component, 1, { autoAlpha: 0, y: '-20px' });
  }
  componentWillUnmount = () => {
    this.props.clearPostDetail();
  }
  initializeData = () => {
    this.props.initialize({
      title: this.props.post.title,
      content: this.props.post.content
    })
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
    this.props.createPostRequest(values).then(() => {
      this.props.history.push('/');
    });
  }

  postDeleteHandler = () => {
    this.props.deletePostsRequest(this.props.post.id);
    this.props.history.push('/');
  }

  toggleEdit = () => {
    this.setState({
      isEditView: !this.state.isEditView
    });
  }

  updatePost = () => {
    let idCopied = {};
    idCopied.id = this.props.post.id;
    this.props.updatePost(this.props.post.id, Object.assign(this.props.form.PostForm.values, idCopied));
    this.toggleEdit();
  }

  render() {
    const { handleSubmit } = this.props;
    const { post } = this.props;
    if (!post) {
      return (
        <Loader />
      );
    }
    const editView = (
      <form className="edit-view" onSubmit={handleSubmit(this.onSubmit)}>
        <div className="edit-view-body">
          <Field
            label="title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="content"
            name="content"
            component={this.renderField}
          />
        </div>
        <div className="footer">
          <TextButton type="button" onClick={this.updatePost}>Update</TextButton>
          <TextButton onClick={this.toggleEdit}>Cancel</TextButton>
        </div>
      </form>
    );
    const detailView = (
      <div className="detail-view">
        <div className="detail-view-body">
          <div className="title">{post.title}</div>
          <pre className="content">{post.content}</pre>
        </div>
        <div className="footer">
          <Link to="/" className="btn">
            <TextButton type="submit">Go Back</TextButton>
          </Link>
          <TextButton
            onClick={this.postDeleteHandler}
          >
            Delete
          </TextButton>
          <TextButton
            onClick={this.toggleEdit}
          >Edit</TextButton>
        </div>
      </div>

    );
    return (
      <div id="post-detail" ref={el => this.component = el}>
        {
          this.state.isEditView ? editView : detailView
        }
      </div>
    );
  }
}

PostDetail.defaultProps = {
  post: {},
  form: {},
  fetchPostsRequest: () => { console.warn('fetchPostRequest is not implemented')},
  deletePostsRequest: () => { console.warn('deletePostsRequest is not implemented')},
  clearPostDetail: () => { console.warn('clearPostDetail is not implemented')},
  updatePost: () => { console.warn('updatePost is not implemented')}
};

PostDetail.propTypes = {
  post: PropTypes.object,
  form: PropTypes.object,
  fetchPostsRequest: PropTypes.func,
  deletePostsRequest: PropTypes.func,
  clearPostDetail: PropTypes.func,
  updatePost: PropTypes.func
};
export default PostDetail;
