import * as types from './types';
import * as actions from './index';

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
});
