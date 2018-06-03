// @flow
import axios from 'axios';
import { type AxiosPromise } from 'axios';
import { type Post } from 'types';

const API_URL =
  process.env.REACT_APP_ENDPOINT || 'http://jsonplaceholder.typicode.com';
const POST_URL = `${API_URL}/posts`;

export const getPosts = (): AxiosPromise<Array<Post>> =>
  axios.get(POST_URL).then(response => response);

export const getPost = (postId: string): AxiosPromise<Post> =>
  axios.get(`${POST_URL}/${postId}`).then(response => response);
