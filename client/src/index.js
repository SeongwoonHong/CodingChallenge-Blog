import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import PostNew from './components/PostNew';
import PostDetail from './components/PostDetail';
import Dashboard from './containers/Dashboard'
import reducers from './reducers';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const isDevelopment = process.env.NODE_ENV === 'development';

const store = createStore(
  reducers,
  isDevelopment ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null,
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div className="app-container">
        <Switch>
          <Route exact path="/posts/new" component={PostNew} />
          <Route exact path="/posts/:id" component={PostDetail} />
          <Route exact path="/" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
