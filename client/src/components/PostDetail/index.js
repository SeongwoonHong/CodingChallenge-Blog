import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import PostDetail from './PostDetail';


const mapStateToProps = (state, ownProps) => {
  if (!state.posts.fetchPosts.data) return {}
  return {
    post: state.posts.fetchPosts.data.filter((post) => post.id == ownProps.match.params.id)[0],
    form: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsRequest: (id) => {
      return dispatch(actions.fetchPostsRequest(id));
    },
    deletePostsRequest: (id) => {
      return dispatch(actions.deletePostsRequest(id));
    },
    clearPostDetail: () => {
      return dispatch(actions.clearPostDetail());
    },
    updatePost: (id, formValues) => {
      return dispatch(actions.updatePost(id, formValues));
    }
  }
}
export default reduxForm({
  form: 'PostForm'
})(connect(mapStateToProps, mapDispatchToProps)(withRouter(PostDetail)));
