import debounce from "lodash.debounce";
import React from "react";

export const debounceHOC = (WrappedComponent) => {
  class Debounce extends React.PureComponent {
    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress();
    };

    onPress = debounce(this.debouncedOnPress, 300, {
      leading: true,
      trailing: false,
    });

    render() {
      return <WrappedComponent {...this.props} onPress={this.onPress} />;
    }
  }

  Debounce.displayName = `debounceHOC(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;
  return Debounce;
};
