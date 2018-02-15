import * as types from '../actions/types';

const initialState = {
  newPost: {
    status: 'INIT',
    data: null,
    error: null
  },
  fetchPosts: {
    status: 'INIT',
    data: null,
    error: null
  },
  fetchPost: {
    status: 'INIT',
    data: null,
    error: null
  },
  deletePost: {
    status: 'INIT'
  },
  updatePost: {
    status: 'INIT'
  }
}

export default function post(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_POST:
      return {
        ...state,
        newPost: {
          status: 'WAITING'
        }
      };
    case types.CREATE_POST_SUCCESS:
      return {
        ...state,
        newPost: {
          status: 'SUCCESS',
          data: action.payload
        },
        fetchPosts: {
          status: 'SUCCESS',
          data: [action.payload, ...state.fetchPosts.data]
        }
      };
    case types.CREATE_POST_FAILURE:
      return {
        ...state,
        newPost: {
          status: 'FAILURE',
          error: action.error
        }
      };
    case types.FETCH_POSTS:
      return {
        ...state,
        fetchPosts: {
          status: 'WAITING'
        }
      }
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        fetchPosts: {
          status: 'SUCCESS',
          data: action.payload
        }
      };
    case types.FETCH_POSTS_FAILURE:
      return {
        ...state,
        fetchPosts: {
          status: 'FAILURE',
          error: action.error
        }
      }
    case types.DELETE_POST:
      return {
        ...state,
        deletePost: {
          status: 'WAITING'
        }
      };
    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        fetchPosts: {
          ...state.fetchPosts,
          data: state.fetchPosts.data.filter((post) => post.id !== action.id)
        },
        fetchPost: {
          status: 'INIT'
        },
        deletePost: {
          status: 'SUCCESS'
        }
      }
    case types.DELETE_POST_FAILURE:
      return {
        ...state,
        deletePost: {
          status: 'FAILURE'
        }
      };
    case types.FETCH_POST_DETAIL:
      return {
        ...state,
        fetchPost: {
          status: 'WAITING'
        }
      };
    case types.FETCH_POST_DETAIL_SUCCESS:
      return {
        ...state,
        fetchPost: {
          status: 'SUCCESS',
          data: action.payload
        }
      };
    case types.FETCH_POST_DETAIL_FAILURE:
      return {
        ...state,
        fetchPost: {
          status: 'FAILURE',
          error: action.error
        }
      };
    case types.UPDATE_POST:
    const index = state.fetchPosts.data.findIndex((post) => post.id === action.id);
      return {
        ...state,
        fetchPosts: {
          status: 'SUCCESS',
          data: state.fetchPosts.data.map((post, i) => {
            if (i === index) {
              return post = action.formValues;
            }
            return post;
          })
        },
        updatePost: {
          status: 'SUCCESS'
        }
      }
    case types.CLEAR_POST:
      return {
        ...state,
        fetchPost: {
          status: 'SUCCESS',
          data: null
        }
      }
    default:
     return state;
  }
}
