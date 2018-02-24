import post from './postReducer';
import * as types from '../actions/types';
import * as actions from '../actions';

describe('post reducer', () => {
  const expectedFailedState = {
    status: 'FAILURE',
    error: 'error'
  }

  describe('create post', () => {
    it('createPost initialize status', () => {
      expect(post(undefined, {}).newPost.status).toEqual('INIT');
    });

    it('createPost waiting status', () => {
      expect(post(undefined, actions.createPost()).newPost.status).toEqual('WAITING');
    });

    it('createPost success', () => {
      const expectedSuccessState = {
        status: 'SUCCESS',
        data: 'createPost'
      };
      expect(post(undefined, actions.createPostSuccess('createPost')).newPost).toEqual(expectedSuccessState);
    });

    it('createPost failure status', () => {
      expect(post(undefined, actions.createPostFailure('error')).newPost).toEqual(expectedFailedState);
    });
  });

  describe('fetch posts', () => {
    it('fetchPosts initialize status', () => {
      expect(post(undefined, {}).fetchPosts.status).toEqual('INIT');
    });

    it('fetchPosts waiting status', () => {
      expect(post(undefined, actions.fetchPosts()).fetchPosts.status)
        .toEqual('WAITING');
    });

    it('fetchPosts success', () => {
      const expectedSuccessState = {
        status: 'SUCCESS',
        data: 'fetchPosts'
      };
      expect(post(undefined, actions.fetchPostsSuccess('fetchPosts')).fetchPosts)
        .toEqual(expectedSuccessState);
    });

    it('fetchPosts failure status', () => {
      expect(post(undefined, actions.fetchPostsFailure('error')).fetchPosts).toEqual(expectedFailedState)
    });
  });

  describe('delete post', () => {
    it('deletePost initialize status', () => {
      expect(post(undefined, {}).deletePost.status).toEqual('INIT');
    });

    it('deletePost waiting status', () => {
      expect(post(undefined, actions.deletePost()).deletePost.status).toEqual('WAITING');
    });

    it('deletePost success', () => {
      const expectedSuccessState = {
        status: 'SUCCESS'
      };
      expect(post(undefined, actions.deletePostSuccess()).deletePost).toEqual(expectedSuccessState);
    });
  });

  describe('fetch post detail', () => {
    it('fetchPostDetail initialize status', () => {
      expect(post(undefined, {}).fetchPost.status).toEqual('INIT');
    });

    it('fetchPostDetail waiting status', () => {
      expect(post(undefined, actions.fetchPostDetail()).fetchPost.status).toEqual('WAITING');
    })

    it('fetchPostDetail success', () => {
      const expectedSuccessState = {
        status: 'SUCCESS',
        data: 'fetchPost'
      };
      expect(post(undefined, actions.fetchPostDetailSuccess('fetchPost')).fetchPost).toEqual(expectedSuccessState);
    });

    it('fetchPostDetail failure', () => {
      expect(post(undefined, actions.fetchPostDetailFailure('error')).fetchPost).toEqual(expectedFailedState);
    });
  });

  describe('clear post', () => {
    it('clear post success', () => {
      const expectedState = {
        status: 'SUCCESS',
        data: null
      };
      expect(post(undefined, actions.clearPostDetail()).fetchPost).toEqual(expectedState);
    })
  });
});
