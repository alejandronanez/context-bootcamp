// @flow
import React from 'react';

type Props = {
  title: string,
  body: string,
};

export const PostItem = (postInfo: Props) => (
  <div>
    <h1>{postInfo.title}</h1>
    <p>{postInfo.body}</p>
  </div>
);
