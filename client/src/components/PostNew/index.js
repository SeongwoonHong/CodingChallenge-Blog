import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

import PostNew from './PostNew';

const mapStateToProps = (state) => {
  return {
    form: state.form.PostForm
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createPostRequest: (newPost) => {
      return dispatch(actions.createPostRequest(newPost));
    }
  }
}

export default reduxForm({
  form: 'PostForm'
})(connect(mapStateToProps, mapDispatchToProps)(PostNew));
