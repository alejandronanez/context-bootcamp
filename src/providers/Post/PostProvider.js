// @flow
import * as React from 'react';
import { createContext } from 'react';
import { type Post } from 'types';

export type State = {
  posts: Array<Post>,
  loading: boolean,
  error: string,
  actions: {
    updatePosts: (posts: Array<Post>) => void,
    updateLoading: (loading: boolean) => void,
    updateError: (error: string) => void,
  },
};

type Props = {
  children?: React.Node,
};

const { Consumer, Provider } = createContext({
  posts: [],
  loading: false,
  error: '',
  actions: {
    updatePosts() {},
    updateLoading() {},
    updateError() {},
  },
});

export class PostsProvider extends React.Component<Props, State> {
  updatePosts = (posts: Array<Post>) => {
    this.setState(() => ({ posts }));
  };

  updateLoading = (loading: boolean) => {
    this.setState(() => ({ loading }));
  };

  updateError = (error: string) => {
    this.setState(() => ({ error }));
  };

  state: State = {
    posts: [],
    loading: false,
    error: '',
    actions: {
      updatePosts: this.updatePosts,
      updateLoading: this.updateLoading,
      updateError: this.updateError,
    },
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const PostsConsumer = Consumer;
