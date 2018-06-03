//@flow
import React from 'react';
import { getPosts } from 'utils/api';
import { withPosts } from 'hoc/withPosts';
import { type Post } from 'types';
import PostItem from 'components/PostItem/PostItem';

type Props = {
  posts: Array<Post>,
  loading?: boolean,
  error: string,
  updatePosts: (posts: Array<Post>) => void,
  updateLoading: (loading: boolean) => void,
  updateError: (error: string) => void,
};

export class PostList extends React.Component<Props> {
  static defaultProps: Props = {
    posts: [],
    error: '',
    updatePosts() {},
    updateLoading() {},
    updateError() {},
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    this.props.updateLoading(true);

    try {
      const response = await getPosts();
      this.props.updatePosts(response.data);
    } catch (e) {
      this.props.updateError('Something went wrong');
    } finally {
      this.props.updateLoading(false);
    }
  };

  renderPostItems = () => {
    return this.props.posts.map(post => (
      <PostItem key={post.id} title={post.title} body={post.body} />
    ));
  };

  render() {
    return (
      <React.Fragment>
        {this.props.loading && <h1>Loading...</h1>}
        {this.props.error && <h1>Something went wrong</h1>}
        {!this.props.loading && this.renderPostItems()}
      </React.Fragment>
    );
  }
}

export default withPosts(PostList);
