// @flow
import * as React from 'react';
import { CommonConsumer } from 'providers/Common/CommonProvider';
import { extractStateFromContext } from 'utils/utils';

export const withCommon = (
  Component: React.ComponentType<any>,
  options?: Array<string>
) => {
  class WithCommon extends React.Component<any> {
    render() {
      return (
        <CommonConsumer>
          {context => {
            return (
              <Component
                {...this.props}
                {...extractStateFromContext(context, options)}
              />
            );
          }}
        </CommonConsumer>
      );
    }
  }

  WithCommon.displayName = `withCommonHOC${Component.displayName ||
    Component.name}`;

  return WithCommon;
};
