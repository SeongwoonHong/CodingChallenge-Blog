import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as types from './types';
import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let mockAdapter = new MockAdapter(axios);

describe('action creators', () => {
  it('create post', () => {
    const createPost = { type: types.CREATE_POST };

    expect(actions.createPost()).toEqual(createPost);
  });

  it('create post success', () => {
    const createPostSuccess = { type: types.CREATE_POST_SUCCESS, payload: { newPost: 'newPost' } };

    expect(actions.createPostSuccess({ newPost: 'newPost' })).toEqual(createPostSuccess);
  });

  it('create post failure', () => {
    const createPostFailure = { type: types.CREATE_POST_FAILURE, error: { error: 'error'} };

    expect(actions.createPostFailure({error: 'error'})).toEqual(createPostFailure);
  });

  describe('async action creators', () => {
    const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
    const API_KEY = '?key=8989IamSuperAwesome';

    afterEach(() => {
      mockAdapter.reset();
    })

    it('fetch posts request', () => {
      const mockResponse = { body: { payload: ['fetchPost'] }};
      mockAdapter.onGet(`${ROOT_URL}/posts${API_KEY}`).reply(200, mockResponse);
      const store = mockStore({ newPost: [] });
      const expectedActions = [
        { type: types.FETCH_POSTS },
        { type: types.FETCH_POSTS_SUCCESS, payload: mockResponse }
      ];
      return store.dispatch(actions.fetchPostsRequest()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('create post request', () => {
      const mockResponse = { body: { payload: ['newPost'] }};
      mockAdapter.onPost(`${ROOT_URL}/posts${API_KEY}`).reply(200, mockResponse);
      const store = mockStore({ newPost: [] });
      const expectedActions = [
        { type: types.CREATE_POST },
        { type: types.CREATE_POST_SUCCESS, payload: mockResponse }
      ];
      return store.dispatch(actions.createPostRequest('newPost')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
