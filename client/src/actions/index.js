import axios from 'axios';
import * as types from './types';

// I am going to use this api without using backend server (I am applying for front end position although I have used front and back end for my personal projects)
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=8989IamSuperAwesome';

// action creators for creating a post
export function createPost() {
  return {
    type: types.CREATE_POST
  };
}

export function createPostSuccess(newPost) {
  return {
    type: types.CREATE_POST_SUCCESS,
    payload: newPost
  };
}

export function createPostFailure(error) {
  return {
    type: types.CREATE_POST_FAILURE,
    error
  };
}

export function createPostRequest(newPost) {
  return (dispatch) => {
    dispatch(createPost());
    return axios.post(`${ROOT_URL}/posts${API_KEY}`, newPost).then((res) => {
      dispatch(createPostSuccess(res.data))
    }).catch((error) => {
      console.log(error);
      dispatch(createPostFailure(error));
    });
  }
}

// action creators for fetching posts

export function fetchPosts() {
  return {
    type: types.FETCH_POSTS
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload: posts
  };
}

export function fetchPostsFailure(error) {
  return {
    type: types.FETCH_POSTS_FAILURE,
    error
  };
}

export function fetchPostsRequest() {
  return (dispatch) => {
    dispatch(fetchPosts());
    return axios.get(`${ROOT_URL}/posts${API_KEY}`).then((res) => {
      dispatch(fetchPostsSuccess(res.data));
    }).catch((error) => {
      dispatch(fetchPostsFailure(error));
    })
  }
}

// action creators for deleting a posts

export function deletePost() {
  return {
    type: types.DELETE_POST
  };
}

export function deletePostSuccess(id) {
  return {
    type: types.DELETE_POST_SUCCESS,
    id
  };
}

export function deletePostFailure(error) {
  return {
    type: types.DELETE_POST_FAILURE,
    error
  };
}

export function deletePostsRequest(id) {
  return (dispatch) => {
    dispatch(deletePost());
    return axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((res) => {
      dispatch(deletePostSuccess(id));
    }).catch((error) => {
      dispatch(deletePostFailure(error));
    })
  }
}

// action creators for fetching post details (only for intial loading)

export function fetchPostDetail() {
  return {
    type: types.FETCH_POST_DETAIL
  };
}

export function fetchPostDetailSuccess(post) {
  return {
    type: types.FETCH_POST_DETAIL_SUCCESS,
    payload: post
  };
}

export function fetchPostDetailFailure(error) {
  return {
    type: types.FETCH_POST_DETAIL_FAILURE,
    error
  };
}

export function fetchPostDetailRequest(id) {
  return (dispatch) => {
    dispatch(fetchPostDetail());
    return axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((res) => {
      dispatch(fetchPostDetailSuccess(res.data));
    }).catch((error) => {
      dispatch(fetchPostDetailFailure(error));
    })
  }
}

// action creator for updating a post

export function updatePost(id, formValues) {
  return {
    type: types.UPDATE_POST,
    id,
    formValues
  };
}

// action creator for clearing a post detail in store
export function clearPostDetail() {
  return {
    type: types.CLEAR_POST
  }
}
