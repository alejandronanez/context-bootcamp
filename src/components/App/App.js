// @flow
import React from 'react';
import { PostsProvider } from 'providers/Post/PostProvider';
import { RouteProvider } from 'providers/Route/RouteProvider';
import PostList from 'components/PostList/PostList';
import PostItem from 'components/PostItem/PostItem';
import Route from 'components/Route/Route';
import Link from 'components/Link/Link';
import { withCommon } from 'hoc/withCommon';

const App = () => (
  <RouteProvider>
    <PostsProvider>
      <Link to="posts">All posts</Link>
      <Link to="post">Individual post</Link>
      <Route activeScreen="posts">
        <PostList />
      </Route>
      <Route activeScreen="post">
        <PostItem body="something cool" title="The title" />
      </Route>
    </PostsProvider>
  </RouteProvider>
);

export default withCommon(App, ['error', 'loading']);
