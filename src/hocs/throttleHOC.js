import React from "react";

import { throttle } from "lodash";

export const multipleTapHandler = (WrappedComponent) => {
  class PreventDoubleClick extends React.PureComponent {
    //Added throttle
    throttleOnPress = () => {
      this.props.onPress && this.props.onPress();
    };

    onPress = throttle(this.throttleOnPress, 300, {
      leading: true,
      trailing: false,
    });

    render() {
      return <WrappedComponent {...this.props} onPress={this.onPress} />;
    }
  }

  PreventDoubleClick.displayName = `multipleTapHandler(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;
  return PreventDoubleClick;
};
