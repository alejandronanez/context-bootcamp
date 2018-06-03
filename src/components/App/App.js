// @flow
import React from 'react';
import { PostsProvider } from 'providers/Post/PostProvider';
import PostList from 'components/PostList/PostList';

const App = () => (
  <PostsProvider>
    <PostList />
  </PostsProvider>
);

export default App;
