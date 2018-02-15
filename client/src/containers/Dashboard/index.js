import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import * as actions from '../../actions';

const mapStateToProps = (state) => {
  return {
    posts: state.posts.fetchPosts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsRequest: () => {
      return dispatch(actions.fetchPostsRequest());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
