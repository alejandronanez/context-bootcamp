// @flow
import React from 'react';
import { PostsProvider } from 'providers/Post/PostProvider';
import { RouteProvider, RouteConsumer } from 'providers/Route/RouteProvider';
import PostList from 'components/PostList/PostList';
import { Route } from 'components/Route/Route';

const style = {
  backgroundColor: '#ccc',
  color: '#fff',
  fontSize: '24px',
  padding: '10px 20px',
  display: 'inline-block',
  marginRight: '10px',
};

const App = () => (
  <RouteProvider>
    <RouteConsumer>
      {context => (
        <React.Fragment>
          <div
            style={style}
            onClick={() => context.actions.updateActiveScreen('posts')}
          >
            All posts
          </div>
          <div
            style={style}
            onClick={() => context.actions.updateActiveScreen('post')}
          >
            Individual post
          </div>
        </React.Fragment>
      )}
    </RouteConsumer>
    <PostsProvider>
      <Route activeScreen="posts">
        <PostList />
      </Route>
      <Route activeScreen="post">
        <h1>One Post</h1>
      </Route>
    </PostsProvider>
  </RouteProvider>
);

export default App;
