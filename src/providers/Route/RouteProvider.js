// @flow
import * as React from 'react';
import { createContext } from 'react';

export type State = {
  activeScreen: string,
  updateActiveScreen: (nextScreen: string) => void,
};

type Props = {
  children?: React.Node,
};

const { Consumer, Provider } = createContext(
  ({
    activeScreen: 'posts',
    updateActiveScreen() {},
  }: State)
);

export class RouteProvider extends React.Component<Props, State> {
  updateActiveScreen = (nextScreen: string) => {
    this.setState(() => ({ activeScreen: nextScreen }));
  };

  state: State = {
    activeScreen: 'posts',
    updateActiveScreen: this.updateActiveScreen,
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const RouteConsumer = Consumer;
