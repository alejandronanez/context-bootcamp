// @flow
import * as React from 'react';
import { RouteConsumer } from 'providers/Route/RouteProvider';

type Props = {
  to: string,
  children?: React.Node,
};

const Link = ({ to, children }: Props) => (
  <RouteConsumer>
    {context => (
      <a href="#" onClick={() => context.updateActiveScreen(to)}>
        {children}
      </a>
    )}
  </RouteConsumer>
);

export default Link;
