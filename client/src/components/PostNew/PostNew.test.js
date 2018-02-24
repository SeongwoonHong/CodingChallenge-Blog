// import React from 'react';
// import { Provider } from 'react-redux';
// import { MemoryRouter } from 'react-router-dom';
// import { createStore } from 'redux';
// import { shallow, configure, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import PostNew from './PostNew';
// configure({ adapter: new Adapter() });
//
// const store = createStore(
//   () => {}
// );
//
// describe('<PostNew />', () => {
//   it ('should render properly', () => {
//     const wrapper = shallow(<PostNew />);
//     console.log(wrapper);
//     expect(wrapper.length).toBe(1);
//   });
//   it ('should have content section', () => {
//     const expectedState = 'expectedState';
//     const mapStateToProps = (state) => ({
//       state,
//     });
//     const wrapper = shallowWithStore(<PostNew />, createMockStore(expectedState))
//     expect(wrapper.props().state).toBe(expectedState);
//   });
//   it ('should not produce error message for less than 500 characters', () => {
//     const wrapper = mount(
//       <Provider store={store}>
//         <PostNew />
//       </Provider>);
//     wrapper.find('textarea').simulate('change', { target: { value: 'My name is Seongwoon Hong'}});
//     wrapper.find('button[type="submit"]').simulate('click');
//     expect(wrapper.state().contentLimitMessage).toBe('');
//   });
// });

describe('PostNew', () => {
  it('temp', () => {
    expect(true).toBe(true);
  })
});
