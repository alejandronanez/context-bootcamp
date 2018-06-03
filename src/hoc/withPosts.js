// @flow
import * as React from 'react';
import { PostsConsumer } from 'providers/Post/PostProvider';

export const withPosts = (Component: React.ComponentType<any>) => {
  class WithPosts extends React.Component<any> {
    render() {
      return (
        <PostsConsumer>
          {context => (
            <Component
              {...this.props}
              posts={context.posts}
              loading={context.loading}
              error={context.error}
              updatePosts={context.actions.updatePosts}
              updateLoading={context.actions.updateLoading}
              updateError={context.actions.updateError}
            />
          )}
        </PostsConsumer>
      );
    }
  }

  WithPosts.displayName = `withPostsHOC${Component.displayName ||
    Component.name}`;

  return WithPosts;
};
