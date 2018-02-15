import { connect } from 'react-redux';
import Posts from './Posts';
import * as actions from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    deletePostsRequest: (id) => {
      return dispatch(actions.deletePostsRequest(id));
    }
  }
}
export default connect(null, mapDispatchToProps)(Posts);
