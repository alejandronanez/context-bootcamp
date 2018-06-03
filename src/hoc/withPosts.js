// @flow
import * as React from 'react';
import { PostsConsumer } from 'providers/Post/PostProvider';
import { extractStateFromContext } from 'utils/utils';

export const withPosts = (
  Component: React.ComponentType<any>,
  options?: Array<string>
) => {
  class WithPosts extends React.Component<any> {
    render() {
      return (
        <PostsConsumer>
          {context => (
            <Component
              {...this.props}
              {...extractStateFromContext(context, options)}
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
