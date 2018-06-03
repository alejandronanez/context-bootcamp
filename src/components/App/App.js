// @flow
import React from 'react';
import { PostsProvider } from 'providers/Post/PostProvider';
import { RouteProvider, RouteConsumer } from 'providers/Route/RouteProvider';
import PostList from 'components/PostList/PostList';
import PostItem from 'components/PostItem/PostItem';
import Route from 'components/Route/Route';
import { withCommon } from 'hoc/withCommon';

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
            onClick={() => context.updateActiveScreen('posts')}
          >
            All posts
          </div>
          <div style={style} onClick={() => context.updateActiveScreen('post')}>
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
        <PostItem body="something cool" title="The title" />
      </Route>
    </PostsProvider>
  </RouteProvider>
);

export default withCommon(App, ['error', 'loading']);
