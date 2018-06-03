// @flow
import * as React from 'react';
import { createContext } from 'react';
import { type Post } from 'types';

export type State = {
  posts: Array<Post>,
  updatePosts: (posts: Array<Post>) => void,
};

type Props = {
  children?: React.Node,
};

const { Consumer, Provider } = createContext(
  ({
    posts: [],
    loading: false,
    error: '',
    updatePosts() {},
  }: State)
);

export class PostsProvider extends React.Component<Props, State> {
  updatePosts = (posts: Array<Post>) => {
    this.setState(() => ({ posts }));
  };

  state: State = {
    posts: [],
    updatePosts: this.updatePosts,
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const PostsConsumer = Consumer;
