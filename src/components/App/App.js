// @flow
import React from 'react';
import { PostsProvider } from 'providers/Post/PostProvider';
import { RouteProvider } from 'providers/Route/RouteProvider';
import PostList from 'components/PostList/PostList';
import { Route } from 'components/Route/Route';

const App = () => (
  <RouteProvider>
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
