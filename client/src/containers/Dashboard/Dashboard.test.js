import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from './Dashboard';


describe('<Dashboard />', () => {
  let dashboard = shallow(<Dashboard />);
  it('renders properly', () => {
    // console.log(dashboard.debug());
    expect(dashboard).toMatchSnapshot();
  })

  it('contains `Blogs` Header', () => {
    expect(dashboard.find('.header').text()).toEqual('Blogs');
  });

  it('contains <Loader /> when `posts.status` is `WAITING`', () => {
    let props = { posts: { status: 'WAITING' }};
    dashboard = shallow(<Dashboard {...props} />);
    expect(dashboard.find('Loader').exists()).toBe(true);
  });

  it('contains (connected) <Posts /> when `posts.status` is `SUCCESS`', () => {
    let props = { posts: { status: 'SUCCESS' }};
    dashboard = shallow(<Dashboard {...props} />);
    expect(dashboard.find('Connect(Posts)').exists()).toBe(true);
  });

  it('contains a button that has class name `btn-new`', () => {
    // console.log(dashboard.debug());
    expect(dashboard.find('Link.btn-new').exists()).toBe(true);
  });


});
