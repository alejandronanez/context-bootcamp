// @flow
import * as React from 'react';
import { Component, Fragment } from 'react';
import { RouteConsumer } from 'providers/Route/RouteProvider';

type Props = {
  activeScreen: string,
  children?: React.Node,
};

export class Route extends Component<Props> {
  render() {
    return (
      <RouteConsumer>
        {context => {
          if (context.activeScreen === this.props.activeScreen) {
            return <Fragment>{this.props.children}</Fragment>;
          }

          return null;
        }}
      </RouteConsumer>
    );
  }
}
