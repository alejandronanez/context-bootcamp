// @flow
import { createContext, Component } from 'react';
import * as React from 'react';

type Props = {
  children?: React.Node,
};

export type State = {
  loading: boolean,
  error: string,
  updateError: (error: string) => void,
  updateLoading: (loading: boolean) => void,
};

const { Consumer, Provider } = createContext(
  ({
    error: '',
    loading: false,
    updateError() {},
    updateLoading() {},
  }: State)
);

export class CommonProvider extends Component<Props, State> {
  updateError = (error: string) => {
    this.setState(() => ({ error }));
  };

  updateLoading = (loading: boolean) => {
    this.setState(() => ({ loading }));
  };

  state = {
    loading: false,
    error: '',
    updateError: this.updateError,
    updateLoading: this.updateLoading,
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const CommonConsumer = Consumer;
